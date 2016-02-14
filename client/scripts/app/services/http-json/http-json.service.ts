import { Injectable } from 'angular2/core';
import { Http, Headers, Request, RequestMethod } from 'angular2/http';
import { Observable } from 'rxjs';

const HEADERS = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});

@Injectable()
export class HttpJson {
    constructor(private http: Http) {

    }

    executePut(options: any): Observable<any> {
        options.method = RequestMethod.Put;
        return this.execute(options);
    }

    executeGet(options: any): Observable<any> {
        options.method = RequestMethod.Get;
        return this.execute(options);
    }

    executePost(options: any): Observable<any> {
        options.method = RequestMethod.Post;
        return this.execute(options);
    }

    executeDelete(options: any): Observable<any> {
        options.method = RequestMethod.Delete;
        return this.execute(options);
    }

    private execute(options: any): Observable<any> {
        if (options.body) {
            if (typeof options.body !== 'string') {
                options.body = JSON.stringify(options.body);
            }
        }

        options.headers = HEADERS;

        return this.http
            .request(new Request(options))
            .map(res => res.json());
    }

}
