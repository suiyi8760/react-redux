import React from 'react'
import CountComponent from './CountComponent'
import TotalComponent from './TotalComponent'

export default class Counter extends React.Component{

    render(){
        return(
            <div>
                <CountComponent name={`first`}></CountComponent>
                <CountComponent name={`second`}></CountComponent>
                <CountComponent name={`third`}></CountComponent>
                <TotalComponent></TotalComponent>
            </div>
        )
    }
}