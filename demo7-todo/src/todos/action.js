import {ADD_TODO} from './actionTypes'

let newTodoId = 0

const addTodo = text => ({
    type:ADD_TODO,
    complete:false,
    id:newTodoId++,
    text
})