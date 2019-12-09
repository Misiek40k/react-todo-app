import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './Card.scss'

export default class Card extends Component {

    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        return (
            <div className={styles.component}>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
