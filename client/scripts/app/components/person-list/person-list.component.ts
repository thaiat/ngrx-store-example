import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { PersonActions } from '../../actions';
import { Person } from '../../interfaces';
import { Observable } from 'rxjs';
import { PersonItemComponent } from '../person-item/person-item.component';

@Component({
    selector: 'person-list',
    styles: [require('./person-list.component.scss').toString()],
    template: require('./person-list.component.html'),
    directives: [PersonItemComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
    persons: Observable<Array<Person>>;
    currentPerson: Person = {
        id: null,
        firstname: '',
        lastname: ''
    };

    constructor(private personActions: PersonActions) {
        this.persons = this.personActions.persons$;
        this.personActions.getAll();
    }

    add(person: Person) {
        this.personActions.create(person);
        this.clearCurrentPerson();
    }

    delete(person: Person) {
        this.personActions.delete(person);
    }

    reload() {
        this.clearCurrentPerson();
        this.personActions.getAll();
    }

    private clearCurrentPerson() {
        this.currentPerson.firstname = '';
        this.currentPerson.lastname = '';
        this.currentPerson.id = null;
    }

}
