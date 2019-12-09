import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';

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

    addColumn(title) {
        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} heroImage={this.props.image} />
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.columns}>
                    {this.state.columns.map(({ key, ...columnProps }) => (
                        <Column key={key} {...columnProps}/>
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)} />
                </div>
            </section>
        )
    }
}
