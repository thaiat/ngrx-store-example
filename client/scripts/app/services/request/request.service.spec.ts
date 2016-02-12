/* beautify ignore:start */
import {
    it,
    inject,
    //injectAsync,
    beforeEachProviders
    //TestComponentBuilder
} from 'angular2/testing';
import {Request} from './request.service.ts';
/* beautify ignore:end */

describe('Service: Request', () => {

    beforeEachProviders(() => [Request]);

    it('should be defined', inject([Request], (service: Request) => {
        expect(service).toBeDefined();
    }));

});