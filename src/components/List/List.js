import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';

import styles from './List.scss';

export default class List extends Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        addColumn: PropTypes.func,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        const { title, image, description, columns, addColumn } = this.props;
        return (
            <section className={styles.component}>
                <Hero titleText={title} heroImage={image} />
                <div className={styles.description}>
                    {ReactHtmlParser(description)}
                </div>
                <div className={styles.columns}>
                    {columns.map(columnData => (
                        <Column key={columnData.id} {...columnData} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={addColumn} />
                </div>
            </section>
        );
    }
}
