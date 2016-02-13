/* beautify ignore:start */
import {
    it,
    inject,
    //injectAsync,
    beforeEachProviders
    //TestComponentBuilder
} from 'angular2/testing';
import {BookApi} from './book-api.service.ts';
/* beautify ignore:end */

describe('Service: BookApi', () => {

    beforeEachProviders(() => [BookApi]);

    it('should be defined', inject([BookApi], (service: BookApi) => {
        expect(service).toBeDefined();
    }));

});