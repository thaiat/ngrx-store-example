import { Component } from 'angular2/core';
import { CounterComponent } from '../counter/counter.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BigTableComponent } from '../big-table/big-table.component';
@Component({
    selector: 'main',
    styles: [require('./main.component.scss').toString()],
    template: require('./main.component.html'),
    directives: [CounterComponent, PersonListComponent, BookListComponent, BigTableComponent]
})
export class MainComponent {

}
