import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Person } from '../../interfaces';

@Component({
    selector: 'person-item',
    styles: [require('./person-item.component.scss').toString()],
    template: require('./person-item.component.html')
})
export class PersonItemComponent {
    @Input() person: Person;
    @Output() delete = new EventEmitter<Person>();
}
