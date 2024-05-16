import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Question.module.css';
import { DictionaryContext } from '../../context/DictionaryContext'; // Import as named export
import { translateToUA, getEngIPA } from '../../utils/translation';
import Popup from '../../components/Popup/Popup';
import { useNavigate } from 'react-router-dom';


const questions = [
    {
        text: "Як зазвичай можна привітатися з другом?",
        options: ["hello", "greetings", "hey", "what's up"],
        correctAnswer: "hello"
    },
    {
        text: "Як ми називаємо ранок?",
        options: ["sunrise", "noon", "morning", "evening"],
        correctAnswer: "morning"
    },
    {
        text: "Яким словом назвемо сніданок?",
        options: ["supper", "breakfast", "lunch", "dinner"],
        correctAnswer: "breakfast"
    },
    {
        text: "Яке з цих слів означає сонце?",
        options: ["comet", "moon", "star", "sun"],
        correctAnswer: "sun"
    },
    {
        text: "Яке з цих слів означає місяць?",
        options: ["comet", "moon", "star", "sun"],
        correctAnswer: "moon"
    },
];

function Question() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const { addWordToDictionary } = useContext(DictionaryContext);
    const navigate = useNavigate(); // Use useNavigate from react-router-dom

    const handleOptionClick = async (option) => {
        setSelectedOption(option);

        // Fetch translation and pronunciation
        const uaTranslation = await translateToUA(option);
        const engPronunciation = await getEngIPA(option);

        // Add word to dictionary
        addWordToDictionary({ word: option, uaTranslation, engPronunciation });
    };

    const handleSubmit = () => {
        if (selectedOption !== null) {
            const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
            setPopupMessage(isCorrect ? 'Correct!' : `Incorrect! The correct answer is: ${questions[currentQuestionIndex].correctAnswer}`);
            setShowPopup(true);

            setTimeout(() => {
                setShowPopup(false);
                const nextIndex = currentQuestionIndex + 1;
                if (nextIndex < questions.length) {
                    setCurrentQuestionIndex(nextIndex);
                    setSelectedOption(null);
                    setProgress((nextIndex / questions.length) * 100);
                } else {
                    navigate('/main'); // Redirect to main page after finishing the quiz
                }
            }, 2000); // Show popup for 2 seconds
        }
    };

    const handleSkipQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
            setProgress((nextIndex / questions.length) * 100);
        } else {
            navigate('/main'); // Redirect to main page after skipping the last question
        }
    };

    return (
        <>
            <div className={styles.singleQuestion}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={styles.questionBody}>
                    <div className={styles.questionField}>
                        <p>{questions[currentQuestionIndex].text}</p>
                    </div>
                    <div className={styles.questionAnswerOptions}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`${styles.answerOption} ${selectedOption === option ? styles.selected : ''}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        className={styles.submitButton}
                        onClick={handleSubmit}
                    >
                        Check Answer
                    </button>
                </div>
            </div>
            <div className={styles.navigationButtons}>
                <Link to="/main" className={styles.navBtn} id="back-to-main-btn">
                    <span className={styles.btnContent}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to Main
                    </span>
                </Link>
                <Link to="/main" className={styles.navBtn} id="finish-later-btn">
                    <span className={styles.btnContent}>
                        Finish Later
                    </span>
                </Link>
                <button
                    className={styles.navBtn}
                    id="skip-question-btn"
                    onClick={handleSubmit}
                >
                    <span className={styles.btnContent} onClick={handleSkipQuestion}>
                        Skip Question <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </button>
            </div>
            {showPopup && <Popup message={popupMessage} />}
        </>
    );
}

export default Question;
