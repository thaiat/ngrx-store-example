/* beautify ignore:start */
import {
it,
inject,
//injectAsync,
beforeEachProviders
//TestComponentBuilder
} from 'angular2/testing';
import {HttpJson} from './http-json.service.ts';
/* beautify ignore:end */

describe('Service: HttpJson', () => {

    beforeEachProviders(() => [HttpJson]);

    it('should be defined', inject([HttpJson], (service: HttpJson) => {
        expect(service).toBeDefined();
    }));

});
