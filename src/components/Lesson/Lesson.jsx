import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSortDown } from '@fortawesome/free-solid-svg-icons'

import styles from './Lesson.module.css'


function Lesson() {
    return (
        <div className={styles.Lesson}>
            <div className={styles.lessonMainField}>
                <div>
                    <h1>Lesson #1</h1>
                    <h2>Lesson Name</h2>
                </div>
                <FontAwesomeIcon className={styles.beginIcon} icon={faPlay} />
            </div>
            <div className={styles.lessonOptions}>
                <div className={styles.lessonAbout}>
                    About <FontAwesomeIcon icon={faSortDown} />
                    <div className={styles.lessonDropdown}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Maiores expedita in quisquam ullam maxime cumque iusto odio a aliquam assumenda magnam,
                            distinctio, delectus, accusamus placeat possimus labore unde molestiae quasi.
                        </p>
                    </div>
                </div>
                <div className={styles.lessonTips}>
                    Tips <FontAwesomeIcon icon={faSortDown} />
                    <div className={styles.lessonDropdown}>
                        <ul>
                            <li>Tip 1</li>
                            <li>Tip 2</li>
                            <li>Tip 3</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.lessonList}>
                    Ex.List <FontAwesomeIcon icon={faSortDown} />
                    <div className={styles.lessonDropdown}>
                        <ul>
                            <li className={styles.exerciseProgress}>Exercise 1 <progress max="100" value="70"></progress> <FontAwesomeIcon icon={faPlay} /></li>
                            <li className={styles.exerciseProgress}>Exercise 2 <progress max="100" value="20"></progress> <FontAwesomeIcon icon={faPlay} /></li>
                            <li className={styles.exerciseProgress}>Exercise 3 <progress max="100" value="90"></progress> <FontAwesomeIcon icon={faPlay} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson;