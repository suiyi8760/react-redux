import {SET_FILTER} from './actionTypes'

export const changeFilter = filterName => ({
    type:SET_FILTER,
    filterName
})