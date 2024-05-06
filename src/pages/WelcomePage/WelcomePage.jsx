import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import styles from './WelcomePage.module.css';

function WelcomePage () {
    const [mascot] = useState({
        welcomeMessage: 'Welcome to Mnogomov!',
        mascotImg: 'https://via.placeholder.com/300'
    });

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.welcomeHeader}>{mascot.welcomeMessage}</h1>
            <img className={styles.mascotImage} src={mascot.mascotImg} alt="Mnogomov mascot" />
            <Link to="/main"><Button type='button'>Embarque the languages!</Button></Link>
        </div>
    );
}

export default WelcomePage;