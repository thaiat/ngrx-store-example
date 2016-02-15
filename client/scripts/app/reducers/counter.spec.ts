import { describe, it } from 'angular2/testing';
import { counter, COUNTER_INITIAL_STATE, COUNTER_ACTION_TYPE } from './counter';
let deepFreeze = require('deep-freeze');

describe('Reducers: counter', () => {

    it('should initialize', () => {
        let newState = counter(undefined, { type: null });
        expect(newState).toEqual(COUNTER_INITIAL_STATE);
    });

    it('should increment', () => {
        let stateBefore = 0;
        deepFreeze(stateBefore);
        let stateAfter = counter(stateBefore, { type: COUNTER_ACTION_TYPE.COUNTER_INCREASE });
        expect(stateAfter).toBe(1);
    });

    it('should decrement', () => {
        let stateBefore = 0;
        deepFreeze(stateBefore);
        let stateAfter = counter(stateBefore, { type: COUNTER_ACTION_TYPE.COUNTER_DECREASE });
        expect(stateAfter).toBe(-1);
    });

});
