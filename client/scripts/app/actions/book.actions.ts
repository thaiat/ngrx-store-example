/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Store, Action} from '@ngrx/store';
import {AppStore, Book} from '../interfaces';
import {BOOK_ACTION_TYPE} from '../reducers';
import {BehaviorSubject, Observable} from 'rxjs';
import {BookApi} from '../services/book-api/book-api.service';
/* beautify ignore:end */

@Injectable()
export class BookActions {

    books$: Observable<Array<Book>>;

    private actions$: BehaviorSubject<Action> = new BehaviorSubject({
        type: null,
        payload: null
    });

    constructor(private store: Store<AppStore>, private bookApi: BookApi) {
        this.books$ = store.select(state => state.books);
        this.actions$.subscribe(action => this.store.dispatch(action));
    }

    create(book: Book) {
        return this.bookApi
            .create(book)
            .subscribe(b => this.actions$.next({
                type: BOOK_ACTION_TYPE.BOOK_CREATE,
                payload: b
            }));
    }

    delete(book: Book) {
        return this.bookApi
            .delete(book)
            .subscribe(() => this.actions$.next({
                type: BOOK_ACTION_TYPE.BOOK_DELETE,
                payload: book
            }));
    }

    getAll() {
        return this.bookApi
            .getAll()
            .subscribe(books => this.load(books));
    }

    // TODO: Not sure we need this as a function, it could be done inside of getAll()
    private load(books: Array<Book>) {
        return this.actions$.next({
            type: BOOK_ACTION_TYPE.BOOK_LOAD,
            payload: books
        });
    }

}
