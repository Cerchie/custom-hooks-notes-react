import React, {useState} from 'react';
import useToggleState from './hooks/useToggleState'
import './MoodClicker.css'


const MoodClicker = () => {

const [isDarkMode, toggleDarkMode] = useToggleState()
const [isHappy, toggleIsHappy] = useToggleState()

return (
    <div className={isDarkMode ? 'clicker-dark' : 'clicker-light'}>
    <h1>{isHappy ? '😀' : '😕'}</h1>  
    <button onClick={toggleIsHappy}>Change Mood</button>
    <button onClick={toggleDarkMode}>Change Mode</button>
    </div>
)
}

export default MoodClicker;