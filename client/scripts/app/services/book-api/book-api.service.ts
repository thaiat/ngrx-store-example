/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Book} from '../../interfaces';
import {LoopbackApi} from '../loopback-api/loopback-api.service';
import {HttpJson } from '../http-json/http-json.service';
/* beautify ignore: end */

@Injectable()
export class BookApi extends LoopbackApi<Book> {
    constructor(httpJson: HttpJson) {
        this.httpJson = httpJson;
        this.endpoint = 'Books';
        super();
    }
}
