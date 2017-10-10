import {createStore} from 'redux'
import Reducer from './Reducer'

const counterVal = {
    first: 20,
    second: 30,
    third: 40
}

const store = createStore(Reducer,counterVal)

export default store

