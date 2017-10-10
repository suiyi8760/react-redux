import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default connect(mapStateToProps)(Summary)

function Summary({total}) {
    return (
        <div>
            <span>{total}</span>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    let sum = 0
    // console.log(state);
    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key]
        }
    }

    return {total: sum}
}