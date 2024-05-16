import React, { useState, useEffect } from 'react';
import { useDictionary } from '../../context/DictionaryContext'; // Import the context
import styles from './DictionaryPage.module.css';
import ukFlag from '../../assets/lang-flags/united-kingdom.png';
import uaFlag from '../../assets/lang-flags/ukraine.png';
import Button from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

function DictionaryPage() {
    const { words } = useDictionary(); // Use the context

    return (
        <div>
            <div className={styles.pageHeader}>
                <img className={styles.langFlag} src={ukFlag} alt="english" />
                <div className={styles.headerCenter}>
                    <h1 className={styles.sectionHeader}>Your personal dictionary</h1>
                    <Button className={styles.toMainBtn} type='button'>
                        <Link className={styles.link} to='/main'>
                            <span>Back to Main</span>
                        </Link>
                    </Button>
                </div>
                <img className={styles.langFlag} src={uaFlag} alt="ukrainian" />
            </div>
            <hr />
            <div className={styles.studiedWords}>
                {words.map((wordObj, index) => (
                    <div key={index} className={styles.singleWord}>
                        <div className={styles.word}>
                            <span className={styles.englishWord}>{wordObj.word}</span>
                        </div>
                        <div className={styles.word}>
                            <span className={styles.englishIPA}>{wordObj.engPronunciation}</span>
                        </div>
                        <div className={styles.word}>
                            <span className={styles.ukrainianWord}>{wordObj.uaTranslation}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DictionaryPage;
