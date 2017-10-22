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

let curReqId = 0

const fetchWeather = cityCode => dispatch => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`
    const reqId = ++curReqId

    const dispatchIfValid = action => {
        console.log(reqId, curReqId);
        if (reqId === curReqId) {
            return dispatch(action)
        }
    }

    dispatchIfValid(fetchWeatherStarted())

    fetch(apiUrl)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(`Fail to get response with ${res.status}`)
            }
            res.json()
                .then(resJson => dispatchIfValid(fetchWeatherSuccess(resJson.weatherinfo)))
                .catch(err => dispatchIfValid(fetchWeatherFail(err)))
        })
        .catch(err => dispatchIfValid(fetchWeatherFail(err)))
}

export {fetchWeatherStarted, fetchWeatherSuccess, fetchWeatherFail, fetchWeather}