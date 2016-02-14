import { Action } from '@ngrx/store';
import { Grid, Row, Item } from '../interfaces';
export var GRID_ACTION_TYPE = {
    GRID_MOUNT: 'GRID_MOUNT',
    GRID_UNMOUNT: 'GRID_UNMOUNT',
    GRID_FILTER: 'GRID_FILTER'
};

const initialState: Grid = {
    filter: '',
    data: []
};

const generateGrid = function(rowCount: number, columCount: number): Grid {
    let valuePoints = [
        'Daenerys', 'Jon', 'Sansa', 'Arya', 'Stannis', 'Gregor', 'Tyrion',
        'Theon', 'Joffrey', 'Ramsay', 'Cersei', 'Bran', 'Margaery',
        'Melisandre', 'Daario', 'Jamie', 'Eddard', 'Myrcella', 'Robb',
        'Jorah', 'Petyr', 'Tommen', 'Sandor', 'Oberyn', 'Drogo', 'Ygritte'
    ];
    let valueIndex = 0;
    let grid: Grid = Object.assign({}, initialState);
    for (let r = 0; r < rowCount; r++) {

        let row: Row = {
            id: r,
            items: []
        };

        for (let c = 0; c < columCount; c++) {
            let item: Item = {
                id: r + '-' + c,
                value: valuePoints[valueIndex],
                isHiddenByFilter: false
            };
            row.items.push(item);

            if (++valueIndex >= valuePoints.length) {
                valueIndex = 0;
            }
        }
        grid.data.push(row);
    }
    return grid;
};

export const grid = (state: Grid = initialState, action: Action) => {
    switch (action.type) {
        case GRID_ACTION_TYPE.GRID_MOUNT:
            return generateGrid(action.payload.rowCount, action.payload.columnCount);

        case GRID_ACTION_TYPE.GRID_UNMOUNT:
            return {
                filter: '',
                data: []
            };

        case GRID_ACTION_TYPE.GRID_FILTER:
            console.log(action.payload);
            return {
                filter: action.payload,
                data: state.data
            };

        default:
            return state;
    }
};
