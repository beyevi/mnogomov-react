import styles from './DictionaryPage.module.css'

import ukFlag from '../../assets/lang-flags/united-kingdom.png'
import uaFlag from '../../assets/lang-flags/ukraine.png'

import Button from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

function DictionaryPage () {
    return (
        <div>
            <div className={styles.pageHeader}>
                <img className={styles.langFlag} src={ukFlag} alt="english" />
                <div className={styles.headerCenter}>
                    <h1 className={styles.sectionHeader}>Your personal dictionary</h1>
                    <Button className={styles.toMainBtn} type='button'>
                        <Link className={styles.link} to='/'>
                            <span>Back to Main</span>
                        </Link>
                    </Button>
                </div>
                 <img className={styles.langFlag} src={uaFlag} alt="ukraininan" />
            </div>
            <hr />
            <div className={styles.studiedWords}>

            </div>
        </div>
    );
}

export default DictionaryPage;