import React,{Component} from 'react'
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
            <form onSubmit={this.addTodoItem}>
                <input type="text" onChange={this.changeTodoText} value={this.state.todoText}/>
                <input type="submit" value={`Add`}/>
            </form>
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

