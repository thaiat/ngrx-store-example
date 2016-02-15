import { Action } from '@ngrx/store';

export var COUNTER_ACTION_TYPE = {
    COUNTER_INCREASE: 'COUNTER_INCREASE',
    COUNTER_DECREASE: 'COUNTER_DECREASE'
};
export var COUNTER_INITIAL_STATE = 0;

export const counter = (state = COUNTER_INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case COUNTER_ACTION_TYPE.COUNTER_INCREASE:
            return state + 1;

        case COUNTER_ACTION_TYPE.COUNTER_DECREASE:
            return state - 1;

        default:
            return state;
    }

};
