/* beautify ignore:start */
import {it, injectAsync, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {BigTableComponent} from './big-table.component';
/* beautify ignore:end */

describe('Component: BigTableComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(BigTableComponent)
            .then((fixture) => {

                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <BigTableComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
