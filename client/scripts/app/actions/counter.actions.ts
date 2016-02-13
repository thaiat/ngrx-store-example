/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {AppStore} from '../interfaces';
import {Store, Action} from '@ngrx/store';
import {COUNTER_ACTION_TYPE} from '../reducers/counter';
import {BehaviorSubject, Observable} from 'rxjs';
/* beautify ignore:end */

@Injectable()
export class CounterActions {

    counter$: Observable<number>;

    private actions$: BehaviorSubject<Action> = new BehaviorSubject({
        type: null,
        payload: null
    });

    constructor(private store: Store<AppStore>) {
        this.counter$ = store.select(state => state.counter);
        this.actions$.subscribe(action => store.dispatch(action));
    }

    increment() {
        return this.actions$.next({
            type: COUNTER_ACTION_TYPE.COUNTER_INCREASE
        });
    }

    decrement() {
        return this.actions$.next({
            type: COUNTER_ACTION_TYPE.COUNTER_DECREASE
        });
    }

}
