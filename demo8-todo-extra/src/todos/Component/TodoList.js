import React from 'react'
import {connect} from 'react-redux'

// import {FILTERTYPES} from "../../constant";
// import{toggleTodo,removeTodo} from "../action";
import {showMatch} from "../selector";
import TodoItem from './TodoItem'

const TodoList = ({todo, filter}) => {
    return (
        <ul className={`todo-list`}>
            {
                todo[0] ? todo.map(item => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        complete={item.complete}
                        type={item.type}
                        // onToggle={() => onToggle(item.id)}
                        // onRemove={() => onRemove(item.id)}
                    />
                )) : `No ${filter === 'all' ? '' : filter} item.`
            }
        </ul>
    )
}

/*const showMatch = (todoState, filter) => {
    switch (filter) {
        case FILTERTYPES.COMPLETED:
            return todoState.filter(stateItem => stateItem.complete)
        case FILTERTYPES.UNCOMPLETED:
            return todoState.filter(stateItem => !stateItem.complete)
        case FILTERTYPES.ALL:
            return todoState
        default:
            throw new Error('unsupported filter')
    }
}*/

const mapState = state => ({
    // todo: showMatch(state.todo, state.filter),
    todo: showMatch(state),
    filter: state.filter
})

/*const mapDispatch = dispatch => ({
    onToggle(id) {
        dispatch(toggleTodo(id))
    },
    onRemove(id) {
        dispatch(removeTodo(id))
    }
})*/

export default connect(mapState)(TodoList)