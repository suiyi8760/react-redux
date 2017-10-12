import React from 'react'
import Link from './Link'

import {ALL,COMPLETED,UNCOMPLETED} from "../../constant/constant";

export default class Count extends React.component{
    render(){
        return(
            <div>
                <Link/>
                <Link/>
                <Link/>
            </div>
        )
    }
}