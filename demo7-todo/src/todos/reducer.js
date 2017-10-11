import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                },
                ...state
            ]
        case TOGGLE_TODO:
            return state.map(todoItem => todoItem.id === action.id ? {
                ...todoItem,
                complete: !todoItem.complete
            } : todoItem)
        case REMOVE_TODO:
            return state.filter(todoItem => todoItem.id !== action.id)
        default:
            return state;
    }
}