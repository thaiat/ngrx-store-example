import { it, injectAsync, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { BookListComponent } from './book-list.component.ts';
import { Book } from '../../interfaces';
import { BookActions } from '../../actions';
import { BehaviorSubject } from 'rxjs';
import { provide } from 'angular2/core';

class BookActionsMock {
    books$: BehaviorSubject<Array<Book>>;
    constructor() {
        this.books$ = new BehaviorSubject<Array<Book>>([]);
    }

    getAll() {
        this.books$.next([
            { id: '0', author: 'Stephen King', title: 'Shining', price: 12 },
            { id: '1', author: 'Stephen King', title: 'Shining', price: 12 }
        ]);
    }
}

describe('Component: BookListComponent', () => {

    beforeEachProviders(() => [
        provide(BookActions, { useClass: BookActionsMock })
    ]);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(BookListComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <BookListComponent>fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                let els = element.querySelectorAll('li');
                expect(els.length).toBe(2);
            });
    }));

});
