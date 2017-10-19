import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../action"

class AddTodo extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            todoText: ''
        }
    }

    changeTodoText = event => {
        this.setState({todoText: event.target.value})
    }

    addTodoItem = event => {
        event.preventDefault()

        const {onAdd} = this.props
        onAdd(this.state.todoText)
    }

    render() {
        return (
            <div className={`add-todo`}>
                <form onSubmit={this.addTodoItem}>
                    <input type="text" className={`new-todo`} onChange={this.changeTodoText} value={this.state.todoText}/>
                    <input type="submit" className={`add-btn`} value={`Add`}/>
                </form>
            </div>
        )
    }
}

const mapDispatch = dispatch => {
    return {
        onAdd(text) {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatch)(AddTodo)

