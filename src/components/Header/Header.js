import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import Container from '../Container/Container';
import Icon from '../Icon/Icon';

import styles from './Header.scss';

export default class Header extends Component {

    static propTypes = {
        to: PropTypes.string,
    }

    render() {
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link className={styles.logo} to='/'>
                            <Icon name='cat'/>
                        </Link>
                        <nav>
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                            <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}
