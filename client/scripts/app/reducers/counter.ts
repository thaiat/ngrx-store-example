import { Action } from '@ngrx/store';

export var COUNTER_ACTION_TYPE = {
    COUNTER_INCREASE: 'COUNTER_INCREASE',
    COUNTER_DECREASE: 'COUNTER_DECREASE'
};

export const counter = (state = 0, action: Action) => {
    switch (action.type) {
        case COUNTER_ACTION_TYPE.COUNTER_INCREASE:
            return state + 1;

        case COUNTER_ACTION_TYPE.COUNTER_DECREASE:
            return state - 1;

        default:
            return state;
    }

};
