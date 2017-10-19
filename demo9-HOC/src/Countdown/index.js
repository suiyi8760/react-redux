import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {count: this.props.beginValue}
    }

    static propTypes = {
        children:PropTypes.func.isRequired,
        beginValue:PropTypes.number.isRequired
    }

    componentDidMount() {
        this.countDownTimer = window.setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({count: newCount})
            } else {
                window.clearInterval(this.countDownTimer)
            }
        }, 1000)
    }

    componentWillUnmount() {
        if (this.countDownTimer) {
            window.clearInterval(this.countDownTimer)
        }
    }

    render() {
        return this.props.children(this.state.count)
    }
}