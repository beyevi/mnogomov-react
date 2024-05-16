// src/context/DictionaryContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a new context
export const DictionaryContext = createContext();

// Create a provider component
export const DictionaryProvider = ({ children }) => {
    const [words, setWords] = useState([]);

    // Function to add a word to the dictionary
    const addWordToDictionary = (newWord) => {
        setWords((prevWords) => {
            const wordExists = prevWords.some((wordObj) => wordObj.word === newWord.word);
            if (!wordExists) {
                return [...prevWords, newWord];
            }
            return prevWords;
        });
    };

    // Provide the words state and addWordToDictionary function to the context
    return (
        <DictionaryContext.Provider value={{ words, addWordToDictionary }}>
            {children}
        </DictionaryContext.Provider>
    );
};

// Custom hook to consume the dictionary context
export const useDictionary = () => {
    return useContext(DictionaryContext);
};
