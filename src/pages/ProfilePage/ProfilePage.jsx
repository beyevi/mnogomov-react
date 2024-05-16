import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import Button from '../../components/Button/Button';
import UsernameChangePopup from '../../components/UsernameChangePopup/UsernameChangePopup';

function ProfilePage() {
    const [userInfo, setUserInfo] = useState({
        username: 'John Doe',
        avatar: 'https://via.placeholder.com/300'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);
    const [newUsername, setNewUsername] = useState(userInfo.username);
    const [showUsernamePopup, setShowUsernamePopup] = useState(false);

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

    const handleAvatarChangeClick = () => {
        setIsEditingAvatar(true);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserInfo(prevState => ({
                    ...prevState,
                    avatar: reader.result
                }));
                setIsEditingAvatar(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCloseUsernamePopup = () => {
        setShowUsernamePopup(false);
    };

    const handleSaveUsername = (newUsername) => {
        setUserInfo(prevState => ({
            ...prevState,
            username: newUsername
        }));
        setShowUsernamePopup(false); // Close the popup after saving
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
                {isEditingAvatar && (
                    <input
                        className={styles.fileInput}
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
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
                <Button className={styles.profOption} type='button' onClick={handleAvatarChangeClick}>
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
            {showUsernamePopup && (
                <UsernameChangePopup
                    onClose={handleCloseUsernamePopup}
                    onSave={handleSaveUsername}
                />
            )}
        </div>
    );
}

export default ProfilePage;
