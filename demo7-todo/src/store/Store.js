import {createStore,combineReducers} from 'redux'

import {Reducer as TodoReduce} from '../todos'
import {Reducer as FilterReduce} from '../filter'

const reducer = combineReducers({
    todo:TodoReduce,
    filter:FilterReduce
})

export default createStore(reducer, {})