/* beautify ignore:start */
import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from 'angular2/core';
import {Grid} from '../../interfaces';
import {GRID_INITIAL_STATE} from '../../reducers';

/* beautify ignore:end */

@Component({
    selector: 'big-table',
    styles: [require('./big-table.component.scss').toString()],
    template: require('./big-table.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTableComponent {
    @Input() grid: Grid;
    @Output() unmount = new EventEmitter();
    @Output() mount = new EventEmitter();
    @Output() filter = new EventEmitter<string>();
    constructor() {
        this.grid = GRID_INITIAL_STATE;
    }
};
