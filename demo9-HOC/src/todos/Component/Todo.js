import React,{Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import './style.css'

export default class Todo extends Component {
    render() {
        return (
            <div className={`todo`}>
                <AddTodo/>
                <TodoList/>
            </div>
        )
    }
}