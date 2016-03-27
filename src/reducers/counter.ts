import { IAction } from 'redux';
import { ActionTypes } from '../constants/actionTypes';
import { ICounterState } from '../models/types';

export default function counter(state: ICounterState = { counter: 0 }, action: IAction): ICounterState {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return Object.assign({}, state, {
                counter: state.counter += 1
            });
        case ActionTypes.DECREMENT:
            return Object.assign({}, state, {
                counter: state.counter -= 1
            });
        default:
            return state;
    }
}
