/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Action} from '@ngrx/store';
import {AppStore} from '../interfaces/app-store/app-store.interface';
import {Store} from '@ngrx/store';
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
        const increment = this.actions$.filter(action => action.type === COUNTER_ACTION_TYPE.COUNTER_INCREASE);

        const decrement = this.actions$.filter(action => action.type === COUNTER_ACTION_TYPE.COUNTER_DECREASE);

        Observable
            .merge(increment, decrement)
            .subscribe((action: Action) => store.dispatch(action));
    }

    increment() {
        this.actions$.next({
            type: COUNTER_ACTION_TYPE.COUNTER_INCREASE
        });
    }

    decrement() {
        this.actions$.next({
            type: COUNTER_ACTION_TYPE.COUNTER_DECREASE
        });
    }

}
