import Lesson from "../Lesson/Lesson.jsx";

import styles from "./Unit.module.css"

function Unit() {
    return (
        <div className={styles.unit}>
            <h1 className={styles.unitHeader}>Unit Header</h1>
            <div className={styles.units}>
                <Lesson></Lesson>
                <Lesson></Lesson>
                <Lesson></Lesson>
            </div>
        </div>
    );
}

export default Unit;