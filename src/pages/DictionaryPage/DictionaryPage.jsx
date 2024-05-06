import React, { useState, useEffect } from 'react';

import styles from './DictionaryPage.module.css'

import ukFlag from '../../assets/lang-flags/united-kingdom.png'
import uaFlag from '../../assets/lang-flags/ukraine.png'

import Button from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

async function translateToUA(word) {
    const url = 'https://google-translation-unlimited.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f00a56a03fmshb59ec5f0f1c92b6p1e1854jsnae98d6e68873',
            'X-RapidAPI-Host': 'google-translation-unlimited.p.rapidapi.com'
        },
        body: new URLSearchParams({
            texte: `${word}`,
            to_lang: 'uk'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.translation_data.translation;
    } catch (error) {
        console.error(error);
    }
}

async function getEngIPA(word) {
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/pronunciation`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f00a56a03fmshb59ec5f0f1c92b6p1e1854jsnae98d6e68873',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.pronunciation.all;
    } catch (error) {
        console.error(error);
    }
}

function DictionaryPage () {
    const [words, setWords] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const wordsToFetch = ['hello', 'morning', 'breakfast']; // Array of words to fetch
            const fetchedWords = await Promise.all(
                wordsToFetch.map(async (word) => {
                    const uaTranslation = await translateToUA(word);
                    const engPronunciation = await getEngIPA(word);
                    return {
                        word,
                        uaTranslation,
                        engPronunciation
                    };
                })
            );
            setWords(fetchedWords);
        }
        fetchData();
    }, []);

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
                 <img className={styles.langFlag} src={uaFlag} alt="ukraininan" />
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