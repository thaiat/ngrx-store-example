/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Http, Headers, Request as Req} from 'angular2/http';
import {Observable} from 'rxjs';
/* beautify ignore:end */

@Injectable()
export class Request {
    constructor(private http: Http) {

    }

    request(options: any): Observable<any> {
        if (options.body) {
            if (typeof options.body !== 'string') {
                options.body = JSON.stringify(options.body);
            }
        }

        options.headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.request(new Req(options))
            .map(res => res.json());
    }
}
