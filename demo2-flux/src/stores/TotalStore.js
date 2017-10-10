import * as ActionTypes from '../ActionTypes'
import AppDispatcher from '../AppDispatcher'
import CounterStore from './CounterStore'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change';

const TotalStore = Object.assign({}, EventEmitter.prototype, {
    getTotalVal(){
        return getTotal(CounterStore.getCounterVal())
    },
    _emitChange() {
        this.emit(CHANGE_EVENT)
    },
    _addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    },
    _removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

TotalStore._dispatchToken = AppDispatcher.register(action => {
    if (action.type === ActionTypes.ADD||action.type === ActionTypes.REDUCE) {
        AppDispatcher.waitFor([CounterStore._dispatchToken])
        TotalStore._emitChange();
    }
})

function getTotal(counterVal) {
    let sum = 0;
    for (let key in counterVal) {
        if (counterVal.hasOwnProperty(key)) {
            sum += counterVal[key]
        }
    }
    return sum;
}

export default TotalStore