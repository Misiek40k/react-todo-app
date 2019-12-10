import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

import styles from './Column.scss';

export default class Column extends Component {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string,
        cards: PropTypes.array,
    }

    render() {
        const { title, icon } = this.props;
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                    {title}
                </h3>
                {/* <div>
                    {this.state.cards.map(({ key, ...cardsProps }) => (
                        <Card key={key} {...cardsProps} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
                </div> */}
            </section>
        );
    }
}
