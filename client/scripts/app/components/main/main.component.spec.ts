import { it, injectAsync, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { MainComponent } from './main.component.ts';
import { BigTableContainerComponent } from '../big-table-container/big-table-container.component';
import { CounterComponent } from '../counter/counter.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { BookListComponent } from '../book-list/book-list.component';

import { Component } from 'angular2/core';

@Component({
    selector: 'big-table-container',
    template: '<div>BigTableContainerComponentMock</div>'
})
class BigTableContainerComponentMock { }

@Component({
    selector: 'counter',
    template: '<div>BigTableContainerComponentMock</div>'
})
class CounterComponentMock { }

@Component({
    selector: 'person-list',
    template: '<div>PersonListComponent</div>'
})
class PersonListComponentMock { }

@Component({
    selector: 'book-list',
    template: '<div>PersonListComponent</div>'
})
class BookListComponentMock { }

describe('Component: MainComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
            .overrideDirective(MainComponent, BigTableContainerComponent, BigTableContainerComponentMock)
            .overrideDirective(MainComponent, CounterComponent, CounterComponentMock)
            .overrideDirective(MainComponent, BookListComponent, BookListComponentMock)
            .overrideDirective(MainComponent, PersonListComponent, PersonListComponentMock)
            .createAsync(MainComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
