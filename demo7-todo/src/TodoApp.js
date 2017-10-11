import React,{Component} from 'react'
import {View as TodoView} from './todos'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <TodoView/>
            </div>
        )
    }
}