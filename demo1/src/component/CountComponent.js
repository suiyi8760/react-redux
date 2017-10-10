import React from 'react'

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.initNum
        }

        this.add = this.add.bind(this)
        this.reduce = this.reduce.bind(this)
    }

    static defaultProps = {
        initNum: 0
    }

    // static propTypes = {
    //     initNum: React.PropTypes.number
    // }

    add() {
        // this.setState({count:this.state.count++})
        this.updateCount(true)
    }

    reduce() {
        this.updateCount(false)
    }

    updateCount(isAdd) {
        const oldVal = this.state.count
        const newVal = isAdd ? oldVal + 1 : oldVal - 1
        this.setState({count: newVal})
        console.log(this.state.count);
        const addNum = newVal - oldVal
        this.props.updateTotal(addNum)
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