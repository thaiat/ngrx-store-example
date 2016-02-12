/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Action} from '@ngrx/store';
import {AppStore} from '../interfaces/app-store/app-store.interface';
import {Person} from '../interfaces/person/person.interface';
import {Store} from '@ngrx/store';
import {PERSON_ACTION_TYPE} from '../reducers/persons';
import {BehaviorSubject, Observable} from 'rxjs';
import {PersonApi} from '../services/person-api/person-api.service';
/* beautify ignore:end */

@Injectable()
export class PersonActions {

    persons$: Observable<Array<Person>>;

    private actions$: BehaviorSubject<Action> = new BehaviorSubject({
        type: null,
        payload: null
    });

    constructor(private store: Store<AppStore>, private personApi: PersonApi) {
        this.persons$ = store.select(state => state.persons);
        const load = this.actions$.filter(action => action.type === PERSON_ACTION_TYPE.PERSON_LOAD);
        const add = this.actions$.filter(action => action.type === PERSON_ACTION_TYPE.PERSON_ADD);
        const remove = this.actions$.filter(action => action.type === PERSON_ACTION_TYPE.PERSON_DELETE);

        Observable
            .merge(load, add, remove)
            .subscribe((action: Action) => store.dispatch(action));
    }

    load(persons: Array<Person>) {
        this.actions$.next({
            type: PERSON_ACTION_TYPE.PERSON_LOAD,
            payload: persons
        });
    }

    create(person: Person) {
        this.personApi.create(person).subscribe(p => this.add(p));
    }

    delete(person: Person) {
        this.personApi.delete(person).subscribe(() => this.remove(person));
    }

    getAll() {
        this.personApi.getAll().subscribe(persons => this.load(persons));
    }

    private add(person: Person) {
        this.actions$.next({
            type: PERSON_ACTION_TYPE.PERSON_ADD,
            payload: person
        });
    }

    private remove(person: Person) {
        this.actions$.next({
            type: PERSON_ACTION_TYPE.PERSON_DELETE,
            payload: person
        });
    }

}
