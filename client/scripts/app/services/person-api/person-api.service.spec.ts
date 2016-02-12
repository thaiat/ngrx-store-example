/* beautify ignore:start */
import {
    it,
    inject,
    //injectAsync,
    beforeEachProviders
    //TestComponentBuilder
} from 'angular2/testing';
import {PersonApi} from './person-api.service.ts';
/* beautify ignore:end */

describe('Service: PersonApi', () => {

    beforeEachProviders(() => [PersonApi]);

    it('should be defined', inject([PersonApi], (service: PersonApi) => {
        expect(service).toBeDefined();
    }));

});