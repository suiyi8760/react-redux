import {createSelector} from 'reselect'
import {FILTERTYPES} from "../constant"

const getTodo = state => state.todo
const getFilter = state => state.filter

export const showMatch = createSelector(
    [getTodo, getFilter],
    (todoState, filter) => {
        switch (filter) {
            case FILTERTYPES.COMPLETED:
                return todoState.filter(stateItem => stateItem.complete)
            case FILTERTYPES.UNCOMPLETED:
                return todoState.filter(stateItem => !stateItem.complete)
            case FILTERTYPES.ALL:
                return todoState
            default:
                throw new Error('unsupported filter')
        }
    }
)