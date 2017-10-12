import React,{Component} from 'react'
import Link from './Link'

import {FILTERTYPES} from "../../constant/index";

export default class Filter extends Component {
    render() {
        return (
            <div>
                <Link filter={FILTERTYPES.ALL}>{FILTERTYPES.ALL}</Link>
                <Link filter={FILTERTYPES.COMPLETED}>{FILTERTYPES.COMPLETED}</Link>
                <Link filter={FILTERTYPES.UNCOMPLETED}>{FILTERTYPES.UNCOMPLETED}</Link>
            </div>
        )
    }
}