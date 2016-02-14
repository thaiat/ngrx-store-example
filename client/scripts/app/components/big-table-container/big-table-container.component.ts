/* beautify ignore:start */
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {GridActions} from '../../actions';
import {Grid} from '../../interfaces';
import {Observable} from 'rxjs';
import {BigTableComponent} from '../big-table/big-table.component';
/* beautify ignore:end */

@Component({
    selector: 'big-table-container',
    styles: [require('./big-table-container.component.scss').toString()],
    template: require('./big-table-container.component.html'),
    directives: [BigTableComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTableContainerComponent {
    grid: Observable<Grid>;
    constructor(private gridActions: GridActions) {
        this.grid = this.gridActions.grid$.map(grid => {
            let visibleCount = 0;

            let filter = grid.filter;
            let rowCount = grid.data.length;
            let columnCount = (grid.data.length && grid.data[0].items.length);
            let dataPoints = rowCount * columnCount;
            for (let r = 0; r < rowCount; r++) {
                let row = grid.data[r];
                for (let c = 0; c < columnCount; c++) {
                    let item = row.items[c];
                    row.items[c].isHiddenByFilter = (filter && (item.value.indexOf(filter) === -1));
                    if (!item.isHiddenByFilter) {
                        visibleCount++;
                    }
                }
            }
            grid.visibleCount = visibleCount;
            grid.dataPoints = dataPoints;
            return grid;
        });
        this.gridActions.mount();
    }

    handleFilterChange(value) {
        this.gridActions.handleFilterChange(value);
    }

    unmountGrid() {
        this.gridActions.unmout();
    }

    remountGrid() {
        this.gridActions.mount();
    }
}
