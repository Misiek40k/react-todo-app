import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

import styles from './Column.scss';

export default class Column extends Component {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string,
        cards: PropTypes.array,
        addCard: PropTypes.func,
    }

    static defaultProps = {
        icon: settings.defaultColumnIcon,
    }

    render() {
        const { title, icon, cards, addCard } = this.props;
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                    {title}
                </h3>
                <div>
                    {cards.map(cardData => (
                        <Card key={cardData.id} {...cardData} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={addCard} />
                </div>
            </section>
        );
    }
}
