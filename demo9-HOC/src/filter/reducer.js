import {SET_FILTER} from "./actionTypes";
import {FILTERTYPES} from "../constant";

export default (state = FILTERTYPES.ALL,action) => {
    switch (action.type){
        case SET_FILTER:
            return action.filterName
        default:
            return state
    }
}