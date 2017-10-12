import React from 'react'
import {connect} from 'react-redux'
import {changeFilter} from "../action"

const Link = ({active,onClick,children}) => {
    if(active){
        return (
            <b className={`filter`}>{children}</b>
        )
    } else {
        return (
            <a className={`filter not-selected`} href={`#${children}`} onClick={onClick}>{children}</a>
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