import { Action } from '@ngrx/store';
import { Book } from '../interfaces';

export var BOOK_ACTION_TYPE = {
    BOOK_LOAD: 'BOOK_LOAD',
    BOOK_CREATE: 'BOOK_CREATE',
    BOOK_DELETE: 'BOOK_DELETE'
};

export const books = (state: Array<Book> = [], action: Action) => {

    switch (action.type) {
        case BOOK_ACTION_TYPE.BOOK_LOAD:
            return action.payload;

        case BOOK_ACTION_TYPE.BOOK_CREATE:
            return [...state, action.payload];

        case BOOK_ACTION_TYPE.BOOK_DELETE:
            return state.filter(book => book.id !== action.payload.id);

        default:
            return state;
    }

};
