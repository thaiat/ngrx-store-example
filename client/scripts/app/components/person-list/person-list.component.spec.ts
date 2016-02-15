import { it, injectAsync, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { PersonListComponent } from './person-list.component';
import { PersonItemComponent } from '../person-item/person-item.component';
import { PersonActions } from '../../actions';
import { Person } from '../../interfaces';
import { BehaviorSubject } from 'rxjs';
import { provide } from 'angular2/core';

class PersonActionsMock {
    persons$: BehaviorSubject<Array<Person>>;

    constructor() {
        this.persons$ = new BehaviorSubject<Array<Person>>([]);
    }

    create(person: Person) {
        this.persons$.next([
            { id: '0', firstname: 'Avi', lastname: 'Haiat' },
            { id: '1', firstname: 'Clara', lastname: 'Haiat' },
            person
        ]);

    }

    delete(person: Person) {
        this.persons$.next([{ id: '0', firstname: 'Avi', lastname: 'Haiat' }]);
    }

    getAll() {

        this.persons$.next([
            { id: '0', firstname: 'Avi', lastname: 'Haiat' },
            { id: '1', firstname: 'Clara', lastname: 'Haiat' }
        ]);
    }

};

describe('Component: PersonListComponent', () => {

    beforeEachProviders(() => [
        PersonItemComponent,
        provide(PersonActions, { useClass: PersonActionsMock })
    ]);

    it('when loading should display the list of persons', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
            .createAsync(PersonListComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                let spans = element.querySelectorAll('span');
                expect(spans.length).toBe(2);
                expect(spans[0].innerText).toBe('[0] - Avi Haiat');
            });
    }));

    it('when delete() should succeed', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
            .createAsync(PersonListComponent)
            .then((fixture) => {
                //fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                cmpInstance.delete();
                fixture.detectChanges();
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                let spans = element.querySelectorAll('span');
                expect(spans.length).toBe(1);
                expect(spans[0].innerText).toBe('[0] - Avi Haiat');
            });
    }));

    it('when add() should succeed', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
            .createAsync(PersonListComponent)
            .then((fixture) => {
                //fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                cmpInstance.add({ id: '3', firstname: 'Toto', lastname: 'Tata' });
                fixture.detectChanges();
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                let spans = element.querySelectorAll('span');
                expect(spans.length).toBe(3);
                expect(spans[2].innerText).toBe('[3] - Toto Tata');
            });
    }));
});
