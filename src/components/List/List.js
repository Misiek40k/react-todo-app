import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

import Hero from '../Hero/Hero';
import Column from '../Column/Column';

import styles from './List.scss'

export default class List extends Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    state = {
        columns: this.props.columns || [],
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} heroImage={this.props.image} />
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.columns}>
                    <Column title='Animals' />
                    <Column title='Plants' />
                    <Column title='Minerals' />
                </div>
            </section>
        )
    }
}
