import * as ActionTypes from '../ActionTypes'
import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'

const counterVal = {
    first: 20,
    second: 30,
    third: 40
}

const CHANGE_EVENT = 'change';

const CountStore = Object.assign({}, EventEmitter.prototype, {
    getCounterVal() {
        return counterVal;
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

CountStore._dispatchToken = AppDispatcher.register(action => {
    if (action.type === ActionTypes.ADD) {
        counterVal[action.countComponent]++;
        CountStore._emitChange();
    } else if (action.type === ActionTypes.REDUCE) {
        counterVal[action.countComponent]--;
        CountStore._emitChange();
    }
})

export default CountStore