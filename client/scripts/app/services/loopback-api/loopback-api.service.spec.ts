/* beautify ignore:start */
import {
it,
inject,
//injectAsync,
beforeEachProviders
//TestComponentBuilder
} from 'angular2/testing';
import {LoopbackApi} from './loopback-api.service.ts';
import {Person} from '../../interfaces';
/* beautify ignore:end */

describe('Service: LoopbackApi', () => {

    beforeEachProviders(() => [LoopbackApi]);

    it('should be defined', inject([LoopbackApi], (service: LoopbackApi<Person>) => {
        expect(service).toBeDefined();
    }));

});
