import React from 'react'
import PropTypes from 'prop-types'
// import store from '../stores/store'

export default class TotalComponent extends React.Component {
    constructor() {
        super(...arguments)
        this.state = this.getOwnState()

        this.getOwnState = this.getOwnState.bind(this)
        this.onChange = this.onChange.bind(this)
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
        const state = this.context.store.getState()
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