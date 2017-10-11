import React,{Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
            </div>
        )
    }
}