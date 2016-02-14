/* beautify ignore:start */
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {GridActions} from '../../actions';
import {Grid} from '../../interfaces';
import {Observable} from 'rxjs';
/* beautify ignore:end */

@Component({
    selector: 'big-table',
    styles: [require('./big-table.component.scss').toString()],
    template: require('./big-table.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTableComponent {
    form = { filter: '' };
    grid: Observable<Grid>;
    dataPoints: Observable<number>;
    constructor(private gridActions: GridActions) {
        this.grid = this.gridActions.grid$;
        //this.dataPoints = this.grid.map(g => g.length * g[0].items.length);
        this.gridActions.mount();
    }

    handleFilterChange(value) {
        this.gridActions.handleFilterChange(value);
    }

    unmountGrid() {
        this.form.filter = '';
        this.gridActions.unmout();
    }

    remountGrid() {
        this.form.filter = '';
        this.gridActions.mount();
    }
}
