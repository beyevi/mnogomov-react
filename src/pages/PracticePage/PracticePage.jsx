import PracticeQuestion from "../../components/Question/PracticeQuestion.jsx";

import styles from './PracticePage.module.css'

function PracticePage () {
    return (
        <div className={styles.pageContainer}>
            <PracticeQuestion></PracticeQuestion>
        </div>
    );
}

export default PracticePage;