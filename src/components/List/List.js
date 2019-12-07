import React, { Component } from 'react'
import PropTypes from 'prop-types';


import Hero from '../Hero/Hero';

import styles from './List.scss'

export default class List extends Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} />
                <div className={styles.description}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}
