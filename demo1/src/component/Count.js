import React from 'react'
import CountComponent from './CountComponent'

export default class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            total:60
        }
        this.updateTotal = this.updateTotal.bind(this)
    }

    updateTotal(addNum){
        this.setState({total:this.state.total+addNum})
    }

    render(){
        return(
            <div>
                <CountComponent initNum={10} updateTotal={this.updateTotal}></CountComponent>
                <CountComponent initNum={20} updateTotal={this.updateTotal}></CountComponent>
                <CountComponent initNum={30} updateTotal={this.updateTotal}></CountComponent>
                <div>
                    <span>{this.state.total}</span>
                </div>
            </div>
        )
    }
}