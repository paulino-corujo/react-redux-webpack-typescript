import { IDispatch } from 'redux';

import { ActionTypes } from '../constants/actionTypes';

export const counterActions = (dispatch: IDispatch) => ({
    increment: () => {
        dispatch({
            type: ActionTypes.INCREMENT
        })
    },

    decrement: () => {
        dispatch({
            type: ActionTypes.DECREMENT
        })
    }
});
