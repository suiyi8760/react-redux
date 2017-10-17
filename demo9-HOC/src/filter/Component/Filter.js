import React,{Component} from 'react'
import Link from './Link'
import './style.css'

import {FILTERTYPES} from "../../constant/index";

export default class Filter extends Component {
    render() {
        return (
            <div className={`filters`}>
                <Link filter={FILTERTYPES.ALL}>{FILTERTYPES.ALL}</Link>
                <Link filter={FILTERTYPES.COMPLETED}>{FILTERTYPES.COMPLETED}</Link>
                <Link filter={FILTERTYPES.UNCOMPLETED}>{FILTERTYPES.UNCOMPLETED}</Link>
            </div>
        )
    }
}