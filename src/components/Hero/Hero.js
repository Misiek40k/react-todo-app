import React from 'react'
import PropTypes from 'prop-types';

import styles from './Hero.scss';

const Hero = props => {
    return (
        <header className={styles.component}>
            <h2 className={styles.title}>{props.titleText}</h2>
            <img className={styles.image} src={props.heroImgSrc} alt="space" />
        </header>
    )
}

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
};

export default Hero;
