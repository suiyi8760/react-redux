import React from 'react'
import * as Action from '../stores/Action'
import store from '../stores/store'

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getOwnState()

        this.getOwnState = this.getOwnState.bind(this)
        this.onChange = this.onChange.bind(this)
        this.add = this.add.bind(this)
        this.reduce = this.reduce.bind(this)
    }

    // static propTypes = {
    //     initNum: React.PropTypes.number
    // }
    componentDidMount(){
        store.subscribe(this.onChange)
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange)
    }

    getOwnState(){
        return {
            count:store.getState()[this.props.name]
        }
    }

    onChange(){
        this.setState(this.getOwnState())
    }

    add() {
        store.dispatch(Action.add(this.props.name))
    }

    reduce() {
        store.dispatch(Action.reduce(this.props.name))
    }

    render() {
        return (
            <div>
                <span onClick={this.reduce}>-</span>
                <span> {this.state.count} </span>
                <span onClick={this.add}>+</span>
            </div>
        )
    }
}