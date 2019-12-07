import React, { Component } from 'react'

import Hero from '../Hero/Hero';

import styles from './List.scss'

export default class List extends Component {
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
