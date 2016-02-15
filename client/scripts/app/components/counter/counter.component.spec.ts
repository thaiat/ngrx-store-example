import { it, injectAsync, beforeEachProviders, TestComponentBuilder } from 'angular2/testing';
import { CounterComponent } from './counter.component.ts';
import { BehaviorSubject } from 'rxjs';
import { CounterActions } from '../../actions';
import { provide } from 'angular2/core';
class CounterActionsMock {
    counter$: BehaviorSubject<number>;

    constructor() {
        this.counter$ = new BehaviorSubject<number>(0);
    }

    increment() {
        this.counter$.next(1);
    }

    decrement() {
        this.counter$.next(-1);
    }

};

describe('Component: CounterComponent', () => {

    beforeEachProviders(() => [
        provide(CounterActions, { useClass: CounterActionsMock })
    ]);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(CounterComponent)
            .then((fixture) => {
                fixture.detectChanges();
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = fixture.debugElement.componentInstance;
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
                expect(element.querySelector('span').innerText).toBe('0');
            });
    }));

    it('when increase() should succeed', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(CounterComponent)
            .then((fixture) => {

                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <CounterComponent>fixture.debugElement.componentInstance;
                cmpInstance.increase();
                fixture.detectChanges();

                expect(element.querySelector('span').innerText).toBe('1');
            });
    }));

    it('when decrease() should succeed', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(CounterComponent)
            .then((fixture) => {

                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <CounterComponent>fixture.debugElement.componentInstance;
                cmpInstance.decrease();
                fixture.detectChanges();

                expect(element.querySelector('span').innerText).toBe('-1');
            });
    }));

});
