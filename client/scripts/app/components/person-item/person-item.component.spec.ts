import {
it,
//inject,
injectAsync,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';
import { PersonItemComponent } from './person-item.component.ts';

describe('Component: PersonItemComponent', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(PersonItemComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
