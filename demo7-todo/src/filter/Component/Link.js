import React from 'react'
import {connect} from 'react-redux'
import {changeFilter} from "../action"

const Link = ({active,onClick,children}) => {
    if(active){
        return (
            <b>{children}</b>
        )
    } else {
        return (
            <a href={`#$children$`} onClick={onClick}>{children}</a>
        )
    }
}

const mapState = (state,ownProps) => ({
    active:state.filter === ownProps.filter
})

const mapDispatch = (dispatch,ownProps) => ({
    onClick(event){
        event.preventDefault()

        dispatch(changeFilter(ownProps.filter))
    }
})

export default connect(mapState,mapDispatch)(Link)