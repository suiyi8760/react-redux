import React from 'react'
import * as Action from '../stores/Action'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

//直接暴露生成的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

//傻瓜组件：仅用于渲染视图（无状态组件可以使用纯函数声明）
function CounterComponent({add, reduce, count}) {
    return (
        <div>
            <span onClick={reduce}>-</span>
            <span> {count} </span>
            <span onClick={add}>+</span>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        count: state[ownProps.name]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        add() {
            dispatch(Action.add(ownProps.name))
        },
        reduce() {
            dispatch(Action.reduce(ownProps.name))
        }
    }
}

