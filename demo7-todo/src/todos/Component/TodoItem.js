import React from 'react'

export default ({text, complete, onToggle, onRemove}) => {
    return (
        <li className={`todo-item`}
            style={
            {textDecoration: complete ? 'line-through' : 'none'}
        }>
            <input type="checkbox" className={`toggle`} checked={complete} readOnly onClick={onToggle}/>
            <label className={`text`}>{text} </label>
            <button className={`remove`} onClick={onRemove}> x </button>
        </li>
    )
}