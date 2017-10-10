import React from 'react'
import store from '../stores/store'

export default class TotalComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getOwnState()

        this.getOwnState = this.getOwnState.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    // static propTypes = {
    //     initNum: React.PropTypes.number
    // }
    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    getOwnState() {
        const state = store.getState()
        let sum = 0
        // console.log(state);
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }

        return {total: sum}
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    render() {
        return (
            <div>
                <span>{this.state.total}</span>
            </div>
        )
    }
}