import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {LOADING,SUCCESS,FAILURE} from "./status";

const ShowWeather = ({status,city,weather,temp1,temp2})=>{
   switch (status){
       case LOADING:
           return (<div>Loading...</div>)
       case SUCCESS:
           return (<div>{city}:{weather}---Max Temp:{temp2}---Min Temp:{temp1}</div>)
       case FAILURE:
           return (<div>Something wrong with network</div>)
       default:
           return (<div>Fixing...</div>)
   }
}

const mapState = state => {
    return {...state.weather}
}

export default connect(mapState)(ShowWeather)