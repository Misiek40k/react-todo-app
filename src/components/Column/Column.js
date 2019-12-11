import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

import styles from './Column.scss';

export default class Column extends Component {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string,
        cards: PropTypes.array,
    }

    state = {
        cards: this.props.cards || [],
    }

    addCard(title) {
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                        title,
                        cards: [],
                    },
                ],
            }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon name={this.props.icon} />
                    </span>
                    {this.props.title}
                </h3>
                <div>
                    {this.state.cards.map(({ key, ...cardsProps }) => (
                        <Card key={key} {...cardsProps} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
                </div>
            </section>
        );
    }
}
