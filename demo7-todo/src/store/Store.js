import {createStore,combineReducers} from 'redux'

import {Reducer as TodoReduce} from '../todos'
import {Reducer as FilterReduce} from '../filter'

export default createStore(combineReducers(TodoReduce,FilterReduce), {})