import * as ActionTypes from './ActionTypes'
import AppDispatcher from './AppDispatcher'

const add = countComponent => {
    AppDispatcher.dispatch({
        type:ActionTypes.ADD,
        countComponent:countComponent
    })
}

const reduce = countComponent => {
    AppDispatcher.dispatch({
        type:ActionTypes.REDUCE,
        countComponent:countComponent
    })
}

export {add,reduce}