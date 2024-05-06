import Unit from '../../components/Unit/Unit.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx'

import styles from './MainPage.module.css'

function MainPage() {
    return (
        <div className={styles.pageContainer}>
            <Unit></Unit>
            <Sidebar></Sidebar>
        </div>
    );
}

export default MainPage;