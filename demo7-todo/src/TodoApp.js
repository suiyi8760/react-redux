import React, {Component} from 'react'
import {View as TodoView} from './todos'
import {View as FilterView} from './filter'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <TodoView/>
                <FilterView/>
            </div>
        )
    }
}