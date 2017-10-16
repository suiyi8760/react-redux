// import React from 'react'
import {createSelector} from 'reselect'
import {FILTERTYPES} from "../constant"

const getTodo = state => state.todo
const getFilter = state => state.filter
const getType = state => state.todoType

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

export const getTypeInfo = (typeId, state) => createSelector(
    [getType, getTodo],
    typeState => typeState.filter(typeItem => typeItem.id === typeId)[0]
)(state)