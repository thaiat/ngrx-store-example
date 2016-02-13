/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Store, Action} from '@ngrx/store';
import {AppStore, Person} from '../interfaces';
import {PERSON_ACTION_TYPE} from '../reducers';
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
        this.actions$.subscribe(action => this.store.dispatch(action));
    }

    create(person: Person) {
        return this.personApi
            .create(person)
            .subscribe(p => this.actions$.next({
                type: PERSON_ACTION_TYPE.PERSON_CREATE,
                payload: p
            }));
    }

    delete(person: Person) {
        return this.personApi
            .delete(person)
            .subscribe(() => this.actions$.next({
                type: PERSON_ACTION_TYPE.PERSON_DELETE,
                payload: person
            }));
    }

    getAll() {
        return this.personApi
            .getAll()
            .subscribe(persons => this.load(persons));
    }

    // TODO: Not sure we need this as a function, it could be done inside of getAll()
    private load(persons: Array<Person>) {
        return this.actions$.next({
            type: PERSON_ACTION_TYPE.PERSON_LOAD,
            payload: persons
        });
    }

}
