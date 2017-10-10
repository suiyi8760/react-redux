import * as ActionTypes from './ActionTypes'

export default (state,action) => {
    const {countComponent} = action;

    switch(action.type){
        case ActionTypes.ADD:
            return {...state,[countComponent]:state[countComponent]+1}
        case ActionTypes.REDUCE:
            return {...state,[countComponent]:state[countComponent]-1}
        default:
            return state;
    }
}