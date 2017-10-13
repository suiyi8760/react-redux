import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo} from "../action";

const TodoItem = ({text, complete, onToggle, onRemove}) => {
    return (
        <li className={`todo-item`}
            style={
                {textDecoration: complete ? 'line-through' : 'none'}
            }>
            <input type="checkbox" className={`toggle`} checked={complete} readOnly onClick={onToggle}/>
            <label className={`text`}>{text} </label>
            <button className={`remove`} onClick={onRemove}> x</button>
        </li>
    )
}

const mapDispatch = (dispatch, ownProps) => ({
    onToggle() {
        dispatch(toggleTodo(ownProps.id))
    },
    onRemove() {
        dispatch(removeTodo(ownProps.id))
    }
})

export default connect(null,mapDispatch)(TodoItem)