/* beautify ignore:start */
import {Person} from '../person/person.interface';
/* beautify ignore:end */
export interface AppStore {
    counter: number;
    persons: Array<Person>;
}
