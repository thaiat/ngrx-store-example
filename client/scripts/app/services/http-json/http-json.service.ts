/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Http, Headers, Request} from 'angular2/http';
import {Observable} from 'rxjs';
/* beautify ignore:end */

@Injectable()
export class HttpJson {
    constructor(private http: Http) {

    }

    execute(options: any): Observable<any> {
        if (options.body) {
            if (typeof options.body !== 'string') {
                options.body = JSON.stringify(options.body);
            }
        }

        options.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http
            .request(new Request(options))
            .map(res => res.json());
    }
}
