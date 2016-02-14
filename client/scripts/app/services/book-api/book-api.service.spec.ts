import { it, beforeEachProviders } from 'angular2/testing';
import { Http, HTTP_PROVIDERS, ConnectionBackend } from 'angular2/http';
import { Injector } from 'angular2/core';
import { HttpJson } from '../http-json/http-json.service';
import { BookApi } from './book-api.service.ts';
import { Observable } from 'rxjs';

let mockResults = {
    all: [
        { id: '0', title: 'Star Wars', author: 'Stephen King' },
        { id: '1', title: 'Glory', author: 'Alfred Musset' }
    ],
    create: {
        id: '0',
        title: 'Star Wars',
        author: 'Stephen King'
    },
    delete: {
        id: '1',
        title: 'Glory',
        author: 'Alfred Musset'
    }
};
describe('Service: BookApi', () => {
    let service: BookApi;
    let httpJson: HttpJson;

    beforeEachProviders(() => [Http, HTTP_PROVIDERS]);

    beforeEach(() => {
        let injector = Injector.resolveAndCreate([
            HTTP_PROVIDERS,
            ConnectionBackend,
            Http,
            HttpJson
        ]);
        httpJson = injector.get(HttpJson);
        spyOn(httpJson, 'executeGet').and.returnValue(Observable.from([
            mockResults.all
        ]));
        spyOn(httpJson, 'executePost').and.returnValue(Observable.from([
            mockResults.create
        ]));
        spyOn(httpJson, 'executeDelete').and.returnValue(Observable.from([
            mockResults.delete
        ]));
        service = new BookApi(httpJson);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('getAll should succeed', () => {
        service
            .getAll()
            .subscribe(res => {
                expect(httpJson.executeGet).toHaveBeenCalledTimes(1);
                expect(res).toEqual(mockResults.all);
            });
    });

    it('create should succeed', () => {
        service
            .create(mockResults.create)
            .subscribe(res => {
                expect(httpJson.executePost).toHaveBeenCalledTimes(1);
                expect(res).toEqual(mockResults.create);
            });
    });

    it('delete should succeed', () => {
        service
            .delete(mockResults.delete)
            .subscribe(res => {
                expect(httpJson.executeDelete).toHaveBeenCalledTimes(1);
                expect(res).toEqual(mockResults.delete);
            });
    });
});
