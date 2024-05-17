import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import styles from './WelcomePage.module.css';

function WelcomePage () {
    const [mascot] = useState({
        welcomeMessage: 'Welcome to Mnogomov!',
        mascotImg: '/mnogomov-french.svg'
    });

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContent}>
                <h1 className={styles.welcomeHeader}>{mascot.welcomeMessage}</h1>
                <img className={styles.mascotImage} src={mascot.mascotImg} alt="Mnogomov mascot" />
                <Link to="/main"><Button className={styles.navBtn} type='button'>Embarque the languages!</Button></Link>
            </div>
        </div>
    );
}

export default WelcomePage;