import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

export default class Card extends Component {

    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        const { title } = this.props;
        return (
            <div className={styles.component}>
                <span>{title}</span>
            </div>
        );
    }
}
