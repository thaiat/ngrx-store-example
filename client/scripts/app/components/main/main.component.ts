/* beautify ignore:start */
import {Component} from 'angular2/core';
import {CounterComponent} from '../counter/counter.component';
import {PersonListComponent} from '../person-list/person-list.component';
/* beautify ignore:end */

@Component({
    selector: 'main',
    styles: [require('./main.component.scss').toString()],
    template: require('./main.component.html'),
    directives: [CounterComponent, PersonListComponent]
})
export class MainComponent {

}
