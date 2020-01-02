import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { settings } from '../../data/dataStore';

import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';

import styles from './Header.scss';

export default class Header extends Component {

    render() {
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link className={styles.logo} to={settings.pathHome}>
                            <Icon name={settings.pageLogo} />
                        </Link>
                        <Search/>
                        <nav>
                            <NavLink exact to={settings.pathHome} activeClassName={settings.activeNavLink}>Home</NavLink>
                            <NavLink exact to={settings.pathInfo} activeClassName={settings.activeNavLink}>Info</NavLink>
                            <NavLink exact to={settings.pathFaq} activeClassName={settings.activeNavLink}>FAQ</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}
