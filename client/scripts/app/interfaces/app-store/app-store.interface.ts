import { Person } from '../person/person.interface';
import { Book } from '../book/book.interface';
export interface Grid {
    filter?: string;
    data: Array<Row>;
}

export interface Row {
    id: number;
    items: Array<Item>;
}

export interface Item {
    id: string;
    value: string;
    isHiddenByFilter: boolean;
}

export interface AppStore {
    counter: number;
    persons: Array<Person>;
    books: Array<Book>;
    grid: Grid;
}
