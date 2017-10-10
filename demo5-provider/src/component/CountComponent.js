import React from 'react'
import * as Action from '../stores/Action'
import PropTypes from 'prop-types'
// import store from '../stores/store'

//容器组件负责处理逻辑操作
export default class CountContainer extends React.Component {
    constructor() {
        super(...arguments)
        this.state = this.getOwnState()

        this.getOwnState = this.getOwnState.bind(this)
        this.onChange = this.onChange.bind(this)
        this.add = this.add.bind(this)
        this.reduce = this.reduce.bind(this)
    }

    static contextTypes = {
        store: PropTypes.object
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange)
    }

    getOwnState() {
        return {
            count: this.context.store.getState()[this.props.name]
        }
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    add() {
        this.context.store.dispatch(Action.add(this.props.name))
    }

    reduce() {
        this.context.store.dispatch(Action.reduce(this.props.name))
    }

    render() {
        return (
            <CounterComponent add={this.add} reduce={this.reduce} count={this.state.count}></CounterComponent>
        )
    }
}

//傻瓜组件：仅用于渲染视图（无状态组件可以使用纯函数声明）
function CounterComponent(props) {
    const {add, reduce, count} = props;
    return (
        <div>
            <span onClick={reduce}>-</span>
            <span> {count} </span>
            <span onClick={add}>+</span>
        </div>
    )
}