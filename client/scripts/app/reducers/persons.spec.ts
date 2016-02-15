import { describe, it } from 'angular2/testing';
import { persons, PERSON_ACTION_TYPE, PERSON_INITIAL_STATE } from './persons';
let deepFreeze = require('deep-freeze');

describe('Reducers: persons', () => {

    it('should initialize', () => {
        let newState = persons(undefined, { type: null });
        expect(newState).toEqual(PERSON_INITIAL_STATE);
    });

    it('create should succeed', () => {
        let stateBefore = PERSON_INITIAL_STATE;
        deepFreeze(stateBefore);
        let stateAfter = persons(stateBefore, {
            type: PERSON_ACTION_TYPE.PERSON_CREATE,
            payload: {
                id: '0',
                firstname: 'Shining',
                lastname: 'Stephen King'
            }
        });
        expect(stateAfter).toEqual([{
            id: '0',
            firstname: 'Shining',
            lastname: 'Stephen King'
        }]);

    });

    it('delete should succeed', () => {
        let stateBefore = [{
            id: '0',
            firstname: 'Shining',
            lastname: 'Stephen King'
        }, {
                id: '1',
                firstname: 'Toto',
                lastname: 'Tata'
            }];
        deepFreeze(stateBefore);
        let stateAfter = persons(stateBefore, {
            type: PERSON_ACTION_TYPE.PERSON_DELETE,
            payload: {
                id: '1',
                firstname: 'Toto',
                lastname: 'Tata'
            }
        });
        expect(stateAfter).toEqual([{
            id: '0',
            firstname: 'Shining',
            lastname: 'Stephen King'
        }]);

    });

    it('load should succeed', () => {
        let stateBefore = PERSON_INITIAL_STATE;
        deepFreeze(stateBefore);
        let stateAfter = persons(stateBefore, {
            type: PERSON_ACTION_TYPE.PERSON_LOAD,
            payload: [{
                id: '0',
                firstname: 'Shining',
                lastname: 'Stephen King'
            }, {
                    id: '1',
                    firstname: 'Toto',
                    lastname: 'Tata'
                }]
        });
        expect(stateAfter).toEqual([{
            id: '0',
            firstname: 'Shining',
            lastname: 'Stephen King'
        }, {
                id: '1',
                firstname: 'Toto',
                lastname: 'Tata'
            }]);
    });
});
