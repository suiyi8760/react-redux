import {SET_FILTER} from "./actionTypes";
import {ALL} from "../constant/constant";

export default (state = ALL,action) => {
    switch (action.type){
        case SET_FILTER:
            return action.filterName
        default:
            return state
    }
}