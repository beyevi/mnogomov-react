// src/components/Popup/Popup.js
import React from 'react';
import styles from './Popup.module.css';

function Popup({ message }) {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Popup;
