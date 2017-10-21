import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from "./ActionTypes";

const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
})

const fetchWeatherSuccess = result => ({
    type: FETCH_SUCCESS,
    result
})

const fetchWeatherFail = error => ({
    type: FETCH_FAILURE,
    error
})

const fetchWeather = cityCode => dispatch => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`

    dispatch(fetchWeatherStarted())

    fetch(apiUrl)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(`Fail to get response with ${res.status}`)
            }
            res.json()
                .then(resJson => dispatch(fetchWeatherSuccess(resJson.weatherinfo)))
                .catch(err => dispatch(fetchWeatherFail(err)))
        })
        .catch(err => dispatch(fetchWeatherFail(err)))
}

export {fetchWeatherStarted, fetchWeatherSuccess, fetchWeatherFail, fetchWeather}