/* beautify ignore:start */
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {PersonActions} from '../../actions/PersonActions';
import {Person} from '../../interfaces/person/person.interface';
import {Observable} from 'rxjs';
/* beautify ignore:end */

@Component({
    selector: 'person-list',
    styles: [require('./person-list.component.scss').toString()],
    template: require('./person-list.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
    persons: Observable<Array<Person>>;
    currentPerson: Person = {
        firstname: '',
        lastname: ''
    };
    constructor(private personActions: PersonActions) {
        this.persons = this.personActions.persons$;
        this.personActions.getAll();
    }

    add(person: Person) {
        this.personActions.create(person);
    }

    delete(person: Person) {
        this.personActions.delete(person);
    }

}
