import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

import styles from './Creator.scss';

import Button from '../Button/Button';


export default class Creator extends Component {
    static propTypes = {
        text: PropTypes.string,
        action: PropTypes.func,
    }

    static defaultProps = {
        text: 'Add new item',
    }

    state = {
        value: '',
        visibleButtons: false,
    }

    handleChange = event => {
        // console.log(event);
        this.setState({
            value: event.target.value,
            visibleButtons: event.target.value.length > 0,
        });
    }

    handleOK = () => {
        if (this.state.value !== '') {
            this.props.action(this.state.value);
            this.setState({
                value: '',
                visibleButtons: false,
            });
        }
    }

    handleCancel = () => {
        if (window.confirm(settings.deleteCreatorText)) {
            this.setState({
                value: '',
                visibleButtons: false,
            });
        }
    }

    render() {
        return (
            <div className={styles.component}>
                <input
                    type='text'
                    placeholder={this.props.text}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
                    <Button onClick={this.handleOK}>OK</Button>
                    <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
                </div>
            </div>
        );
    }
}
