import {createStore} from 'redux'

import {Reducer as TodoReduce} from '../todos'

export default createStore(TodoReduce, [])