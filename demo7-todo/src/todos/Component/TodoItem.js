import React from 'react'

export default ({text, complete, onToggle, onRemove}) => {
    return (
        <li style={
            {textDecoration: complete ? 'line-through' : 'none'}
        }>
            <input type="checkbox" checked={complete} readOnly onClick={onToggle}/>
            <label>{text} </label>
            <button onClick={onRemove}> x </button>
        </li>
    )
}