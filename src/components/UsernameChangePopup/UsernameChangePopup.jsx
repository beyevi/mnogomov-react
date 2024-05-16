import React, { useState } from 'react';
import styles from './UsernameChangePopup.module.css';

function UsernameChangePopup({ onClose, onSave }) {
    const [newUsername, setNewUsername] = useState('');

    const handleInputChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleSave = () => {
        onSave(newUsername); // Pass the new username to the onSave callback
        onClose(); // Close the popup
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h3>Change Username</h3>
                <input
                    type="text"
                    value={newUsername}
                    onChange={handleInputChange}
                    placeholder="Enter new username"
                />
                <div className={styles.buttonGroup}>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default UsernameChangePopup;
