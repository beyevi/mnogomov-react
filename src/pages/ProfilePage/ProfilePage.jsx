import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './ProfilePage.module.css';
import Button from '../../components/Button/Button.jsx';

function ProfilePage() {
    const [userInfo, setUserInfo] = useState({
        username: 'John Doe',
        avatar: 'https://via.placeholder.com/300'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(userInfo.username);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setUserInfo(prevState => ({
            ...prevState,
            username: newUsername
        }));
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setNewUsername(e.target.value);
    };

    return (
        <div className={styles.profileSection}>
            <h1 className={styles.profileTitle}>Your Profile</h1>
            <div className={styles.userInfo}>
                <img className={styles.avatar} src={userInfo.avatar} alt="User avatar" />
                {isEditing ? (
                    <input
                        className={styles.usernameInput}
                        type="text"
                        value={newUsername}
                        onChange={handleInputChange}
                    />
                ) : (
                    <h2 className={styles.username}>{userInfo.username}</h2>
                )}
            </div>
            <div className={styles.profileOptions}>
                {isEditing ? (
                    <Button className={styles.profOption} type='button' onClick={handleSaveClick}>
                        Save
                    </Button>
                ) : (
                    <Button className={styles.profOption} type='button' onClick={handleEditClick}>
                        Change User Name
                    </Button>
                )}
                <Button className={styles.profOption} type='button'>
                    Change User Avatar
                </Button>
                <Button className={styles.profOption} type='button'>
                    <Link className={styles.linkText} to='/user-stats'>
                        View Statistics
                    </Link>
                </Button>
                <Button className={styles.profOption} type='button'>
                    <Link className={styles.linkText} to='/main'>
                        Back to Main
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default ProfilePage;
