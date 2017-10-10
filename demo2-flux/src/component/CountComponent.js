import React from 'react'
import * as Action from '../Action'
import CounterStore from '../stores/CounterStore'

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: CounterStore.getCounterVal()[props.name]
        }

        this.onChange = this.onChange.bind(this)
        this.add = this.add.bind(this)
        this.reduce = this.reduce.bind(this)
    }

    // static propTypes = {
    //     initNum: React.PropTypes.number
    // }
    componentDidMount(){
        CounterStore._addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        CounterStore._removeChangeListener(this.onChange)
    }

    onChange(){
        const curCountVal = CounterStore.getCounterVal()[this.props.name]
        this.setState({count:curCountVal})
    }

    add() {
        Action.add(this.props.name)
    }

    reduce() {
        Action.reduce(this.props.name)
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