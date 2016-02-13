/* beautify ignore:start */
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {BookActions} from '../../actions';
import {Observable} from 'rxjs';
import {Book} from '../../interfaces';
/* beautify ignore:end */

@Component({
    selector: 'book-list',
    styles: [require('./book-list.component.scss').toString()],
    template: require('./book-list.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
    books: Observable<Array<Book>>;
    constructor(private bookActions: BookActions) {
        this.books = this.bookActions.books$;
        this.bookActions.getAll();
    }
}
