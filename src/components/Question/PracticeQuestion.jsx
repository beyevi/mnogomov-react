import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Question.module.css';

function PracticeQuestion () {
    return (
        <>
            <div className={styles.singleQuestion}>
                <div className={styles.questionBody}>
                    <div className={styles.questionField}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Tempora modi quod ullam impedit quia beatae consectetur eius
                            velit eligendi enim unde voluptatibus minima iste repellat dolores,
                            reprehenderit quidem necessitatibus sequi.
                        </p>
                    </div>
                    <div className={styles.questionAnswerOptions}>
                        <button className={styles.answerOption}>Option 1</button>
                        <button className={styles.answerOption}>Option 2</button>
                        <button className={styles.answerOption}>Option 3</button>
                        <button className={styles.answerOption}>Option 4</button>
                    </div>
                    <button className={styles.submitButton}>Check Answer</button>
                </div>
            </div>
            <div className={styles.navigationButtons}>
                    <Link to="/main" className={styles.navBtn} id="back-to-main-btn">
                        <span className={styles.btnContent}>
                            <FontAwesomeIcon icon={faArrowLeft} /> Back to Main
                        </span>
                    </Link>

                    <Link to="/practice" className={styles.navBtn} id="skip-question-btn">
                        <span className={styles.btnContent}>
                            Skip Question <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </Link>
                </div>
        </>
    );
}

export default PracticeQuestion;