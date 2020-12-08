import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState'
const ColorPicker = () => {
const [color, setColor] = useLocalStorageState('color', 'teal')
const changeColor = e => {
    setColor(e.target.value)
}
    return (
        <>
        <h1 style={{color}}>Your color is {color}</h1>
        <select value={color} onChange={changeColor}>
            <option value="red">Red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
            <option value="teal">teal</option>
        </select>
        </>
    )
}

export default ColorPicker;