import React from 'react'
import {Action} from '../weather'
import {connect} from 'react-redux'

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};

class CitySelector extends React.Component {

    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0]
        this.props.onSelect(CITY_CODES[defaultCity])
    }

    getWeatherInfo = (event) => {
        this.props.onSelect(event.target.value)
    }

    render() {
        return (
            <select onChange={this.getWeatherInfo}>
                {
                    Object.keys(CITY_CODES).map(codeKey => (
                        <option key={CITY_CODES[codeKey]} value={CITY_CODES[codeKey]}>{codeKey}</option>
                    ))
                }
            </select>
        )
    }
}

const mapDispatch = (dispatch, ownProps) => ({
    onSelect(cityId) {
        dispatch(Action.fetchWeather(cityId))
    }
})

export default connect(null, mapDispatch)(CitySelector)