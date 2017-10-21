import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
// import Perf from 'react-addons-perf'

import {Reducer as fetchWeatherReducer} from '../weather'

const win = window
/*//供perf-react性能监控组件调用(暂不支持react16)
win.Perf = Perf*/

const reducer = combineReducers({
    weather: fetchWeatherReducer,
})

const middlewares = [thunkMiddleware]
//用于开发环境下检查reducer是否为纯函数(不直接修改state)
if (process.env.NODE_ENV !== 'production') {
    //push进中间件数组供applyMiddleware调用
    middlewares.push(require('redux-immutable-state-invariant').default())
}

//store增强,compose用于将多个增强合并一起
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
)

export default createStore(reducer, {}, storeEnhancers)