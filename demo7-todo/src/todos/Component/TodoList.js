import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo} from "../action";
import TodoItem from './TodoItem'

const TodoList = ({todo, onToggle, onRemove}) => {
    return (
        <ul>
            {
                todo.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        complete={item.complete}
                        onToggle={() => onToggle(item.id)}
                        onRemove={() => onRemove(item.id)}
                    />
                ))
            }
        </ul>
    )
}

const mapState = state => ({
    todo: state
})

const mapDispatch = dispatch => ({
    onToggle(id) {
        dispatch(toggleTodo(id))
    },
    onRemove(id) {
        dispatch(removeTodo(id))
    }
})

export default connect(mapState, mapDispatch)(TodoList)