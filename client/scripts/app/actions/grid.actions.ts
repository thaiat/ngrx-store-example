import { Injectable } from 'angular2/core';
import { AppStore, Grid } from '../interfaces';
import { Store, Action } from '@ngrx/store';
import { GRID_ACTION_TYPE } from '../reducers';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GridActions {

    grid$: Observable<Grid>;

    private actions$: BehaviorSubject<Action> = new BehaviorSubject({
        type: null,
        payload: null
    });

    constructor(private store: Store<AppStore>) {
        this.grid$ = store.select(state => state.grid);
        this.actions$
            .subscribe(action => store.dispatch(action));
    }

    mount(rowCount = 1000, columnCount = 10) {
        return this.actions$.next({
            type: GRID_ACTION_TYPE.GRID_MOUNT,
            payload: {
                rowCount: rowCount,
                columnCount: columnCount
            }
        });
    }

    unmout() {
        return this.actions$.next({
            type: GRID_ACTION_TYPE.GRID_UNMOUNT
        });
    }

    handleFilterChange(newValue) {
        return this.actions$.next({
            type: GRID_ACTION_TYPE.GRID_FILTER,
            payload: newValue
        });

    }

}
