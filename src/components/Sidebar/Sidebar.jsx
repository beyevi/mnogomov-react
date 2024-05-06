import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import styles from "./Sidebar.module.css"

import ukFlag from '../../assets/lang-flags/united-kingdom.png'
import frFlag from '../../assets/lang-flags/france.png'
import uaFlag from '../../assets/lang-flags/ukraine.png'


function MainSidebar() {
    return (
        <div className={styles.mainSidebar}>
            <div className={styles.infoPart}>
                <div className={styles.user}>
                    <FontAwesomeIcon className={styles.faIcon} icon={faUser} />
                </div>
                <div className={styles.langFlag}>
                    <FontAwesomeIcon className={styles.faIcon} icon={faFlag} />
                    <div className={styles.langDropdown}>
                        <img className={styles.langFlagOption} src={ukFlag} id="eng-option" alt="English" />
                        <img className={styles.langFlagOption} src={frFlag} id="fr-option" alt="French" />
                        <img className={styles.langFlagOption} src={uaFlag} id="ukr-option" alt="Ukrainian" />
                    </div> 
                </div>
            </div>
            <hr className={styles.separator}/>
            <div className={styles.navButtons}>
                {/* <Link to='/' className={styles.navigationButton} id="to-learn-btn">Learn</Link> */}
                <Link to='/practice' className={styles.navigationButton} id="to-practice-btn">Practice</Link>
                <Link to='/dictionary' className={styles.navigationButton} id="to-dict-btn">Dictionary</Link>
                <Link to='/profile' className={styles.navigationButton} id="to-profile-btn">Profile</Link>
                <Link to='/about' className={styles.navigationButton} id="to-about-btn">About Us</Link>
            </div>
        </div>
    );
}

export default MainSidebar;