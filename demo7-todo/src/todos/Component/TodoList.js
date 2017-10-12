import React from 'react'
import {connect} from 'react-redux'

import {FILTERTYPES} from "../../constant";
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

const showMatch = (todoState, filter) => {
    switch (filter) {
        case FILTERTYPES.COMPLETED:
            return todoState.filter(stateItem => stateItem.complete)
        case FILTERTYPES.UNCOMPLETED:
            return todoState.filter(stateItem => !stateItem.complete)
        default:
            return todoState
    }
}

const mapState = state => ({
    todo: showMatch(state.todo,state.filter)
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