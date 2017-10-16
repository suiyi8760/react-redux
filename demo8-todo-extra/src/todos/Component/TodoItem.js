import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo, changeType} from "../action";
import {getTypeInfo} from "../selector";

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoType: props.typeItem.id
        }
    }

    getSelect = event => {
        const typeId = Number(event.target.value);

        this.setState({todoType: typeId})
        this.props.onChangeType(typeId)
    }

    render() {
        const {text, complete, typeItem, types, onToggle, onRemove} = this.props

        return (
            <li className={`todo-item`}
                style={
                    {
                        textDecoration: complete ? 'line-through' : 'none',
                        backgroundColor: typeItem.color
                    }
                }>
                <input type="checkbox" className={`toggle`} checked={complete} readOnly onClick={onToggle}/>
                <label className={`text`}>{text} </label>
                <select onChange={this.getSelect} value={this.state.todoType}>
                    {
                        types.map(typeItem => <option key={typeItem.id} value={typeItem.id}>{typeItem.name}</option>)
                    }
                </select>
                <button className={`remove`} onClick={onRemove}> x</button>
            </li>
        )
    }
}

const mapState = (state, ownProps) => {
    return ({
        typeItem: getTypeInfo(state,ownProps),
        types: state.todoType
    })
}

const mapDispatch = (dispatch, ownProps) => ({
    onToggle() {
        dispatch(toggleTodo(ownProps.id))
    },
    onRemove() {
        dispatch(removeTodo(ownProps.id))
    },
    onChangeType(typeId) {
        dispatch(changeType(ownProps.id, typeId))
    }
})

export default connect(mapState, mapDispatch)(TodoItem)