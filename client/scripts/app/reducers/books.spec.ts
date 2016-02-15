import { describe, it } from 'angular2/testing';
import { books, BOOK_ACTION_TYPE, BOOK_INITIAL_STATE } from './books';
let deepFreeze = require('deep-freeze');

describe('Reducers: books', () => {

    it('should initialize', () => {
        let newState = books(undefined, { type: null });
        expect(newState).toEqual(BOOK_INITIAL_STATE);
    });

    it('create should succeed', () => {
        let stateBefore = BOOK_INITIAL_STATE;
        deepFreeze(stateBefore);
        let stateAfter = books(stateBefore, {
            type: BOOK_ACTION_TYPE.BOOK_CREATE,
            payload: {
                id: '0',
                title: 'Shining',
                author: 'Stephen King'
            }
        });
        expect(stateAfter).toEqual([{
            id: '0',
            title: 'Shining',
            author: 'Stephen King'
        }]);

    });

    it('delete should succeed', () => {
        let stateBefore = [{
            id: '0',
            title: 'Shining',
            author: 'Stephen King'
        }, {
                id: '1',
                title: 'Toto',
                author: 'Tata'
            }];
        deepFreeze(stateBefore);
        let stateAfter = books(stateBefore, {
            type: BOOK_ACTION_TYPE.BOOK_DELETE,
            payload: {
                id: '1',
                title: 'Toto',
                author: 'Tata'
            }
        });
        expect(stateAfter).toEqual([{
            id: '0',
            title: 'Shining',
            author: 'Stephen King'
        }]);

    });

    it('load should succeed', () => {
        let stateBefore = BOOK_INITIAL_STATE;
        deepFreeze(stateBefore);
        let stateAfter = books(stateBefore, {
            type: BOOK_ACTION_TYPE.BOOK_LOAD,
            payload: [{
                id: '0',
                title: 'Shining',
                author: 'Stephen King'
            }, {
                    id: '1',
                    title: 'Toto',
                    author: 'Tata'
                }]
        });
        expect(stateAfter).toEqual([{
            id: '0',
            title: 'Shining',
            author: 'Stephen King'
        }, {
                id: '1',
                title: 'Toto',
                author: 'Tata'
            }]);
    });
});
