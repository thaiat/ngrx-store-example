/* beautify ignore:start */
import {Person} from '../person/person.interface';
import {Book} from '../book/book.interface';
/* beautify ignore:end */
export interface AppStore {
    counter: number;
    persons: Array<Person>;
    books: Array<Book>;
}
