import React from 'react'
import TotalStore from '../stores/TotalStore'

export default class TotalComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: TotalStore.getTotalVal()
        }

        this.onChange = this.onChange.bind(this)
    }

    // static propTypes = {
    //     initNum: React.PropTypes.number
    // }
    componentDidMount(){
        TotalStore._addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        TotalStore._removeChangeListener(this.onChange)
    }

    onChange(){
        const curTotalVal = TotalStore.getTotalVal()
        this.setState({total:curTotalVal})
    }

    render() {
        return (
            <div>
                <span>{this.state.total}</span>
            </div>
        )
    }
}