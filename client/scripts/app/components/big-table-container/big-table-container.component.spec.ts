import { it, injectAsync, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { BigTableContainerComponent } from './big-table-container.component.ts';
import { BehaviorSubject } from 'rxjs';
import { Grid } from '../../interfaces';
import { GRID_INITIAL_STATE } from '../../reducers';
import { GridActions } from '../../actions';
import { provide } from 'angular2/core';

class GridActionsMock {
    grid$: BehaviorSubject<Grid>;

    constructor() {
        this.grid$ = new BehaviorSubject<Grid>(GRID_INITIAL_STATE);
    }

    mount() {
        this.grid$.next({
            data: [{
                id: 0,
                items: [
                    { id: '0-0', value: '0-0-value', isHiddenByFilter: false },
                    { id: '0-1', value: '0-1-value', isHiddenByFilter: false }
                ]
            }, {
                    id: 1,
                    items: [
                        { id: '1-0', value: '1-0-value', isHiddenByFilter: false },
                        { id: '1-1', value: '1-1-value', isHiddenByFilter: false }
                    ]
                }]
        });
    }
    unmount() {
        this.grid$.next(GRID_INITIAL_STATE);
    }

    handleFilterChange(value) { }
}

describe('Component: BigTableContainerComponent', () => {

    beforeEachProviders(() => [
        provide(GridActions, { useClass: GridActionsMock })
    ]);

    it('when loaded should display grid', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(BigTableContainerComponent)
            .then((fixture) => {
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <BigTableContainerComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                expect(element.querySelectorAll('tr').length).toBe(2);
            });
    }));

    it('when remountGrid() should display grid', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(BigTableContainerComponent)
            .then((fixture) => {
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <BigTableContainerComponent>fixture.debugElement.componentInstance;
                cmpInstance.remountGrid();
                fixture.detectChanges();
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                expect(element.querySelectorAll('tr').length).toBe(2);
            });
    }));

    it('when unmoutGrid() should not display grid', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(BigTableContainerComponent)
            .then((fixture) => {
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <BigTableContainerComponent>fixture.debugElement.componentInstance;
                cmpInstance.unmountGrid();
                fixture.detectChanges();
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                expect(element.querySelectorAll('tr').length).toBe(0);
            });
    }));

});
