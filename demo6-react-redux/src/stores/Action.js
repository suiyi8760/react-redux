import * as ActionTypes from './ActionTypes'

const add = countComponent => ({
    type: ActionTypes.ADD,
    countComponent: countComponent
})

const reduce = countComponent => ({
    type: ActionTypes.REDUCE,
    countComponent: countComponent
})

export {add, reduce}