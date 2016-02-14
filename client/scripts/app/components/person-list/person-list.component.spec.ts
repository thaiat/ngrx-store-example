import { it, injectAsync, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { PersonListComponent } from './person-list.component';
import { PersonItemComponent } from '../person-item/person-item.component';
import { PersonActions } from '../../actions';
import { Store, provideStore } from '@ngrx/store';
import { AppStore } from '../../interfaces';
import { Injector, provide } from 'angular2/core';
import { counter, persons, books } from '../../reducers';
let injector: Injector;
let store: Store<AppStore>;

fdescribe('Component: PersonListComponent', () => {

    beforeEachProviders(() => [PersonItemComponent]);

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            provideStore({ counter, persons, books }, { counter: 1 })
        ]);

        store = injector.get(Store);
        console.log('XXX', store);
        store.select(state => state.counter).subscribe(v => console.log('THE COUNTER IS', v));
    });

    it('should be defined', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
            .overrideProviders(PersonActions, [provide(Store, { useValue: store })])
            .createAsync(PersonListComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});
