import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

let todoId = 0

const addTodo = text => ({
    type: ADD_TODO,
    complete: false,
    id: todoId++,
    text
})

const toggleTodo = id => ({
    id,
    type: TOGGLE_TODO
})

const removeTodo = id => ({
    id,
    type: REMOVE_TODO
})

export {addTodo,toggleTodo,removeTodo}