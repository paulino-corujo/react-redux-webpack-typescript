import { IDispatch } from 'redux';
import { ActionTypes } from '../constants/actionTypes';

export const counterActions: (dispatch: IDispatch) => any = (dispatch: IDispatch) => ({

    decrement: (): void => {
        dispatch({
            type: ActionTypes.DECREMENT
        });
    },
    increment: (): void => {
        dispatch({
            type: ActionTypes.INCREMENT
        });
    }
});
