/* beautify ignore:start */
import {Action} from '@ngrx/store';
import {Person} from '../interfaces/person/person.interface';
/* beautify ignore:end */

export var PERSON_ACTION_TYPE = {
    PERSON_LOAD: 'PERSON_LOAD',
    PERSON_ADD: 'PERSON_ADD',
    PERSON_DELETE: 'PERSON_DELETE'
};

export const persons = (state: Array<Person> = [], action: Action) => {

    switch (action.type) {
        case PERSON_ACTION_TYPE.PERSON_LOAD:
            return action.payload;

        case PERSON_ACTION_TYPE.PERSON_ADD:
            return [...state, action.payload];

        case PERSON_ACTION_TYPE.PERSON_DELETE:
            return state.filter(person => person.id !== action.payload.id);

        default:
            return state;
    }

};
