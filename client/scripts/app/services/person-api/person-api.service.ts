/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Person} from '../../interfaces';
import {LoopbackApi} from '../loopback-api/loopback-api.service';
import {HttpJson } from '../http-json/http-json.service';
/* beautify ignore: end */

@Injectable()
export class PersonApi extends LoopbackApi<Person> {
    constructor(httpJson: HttpJson) {
        this.httpJson = httpJson;
        this.endpoint = 'Persons';
        super();
    }
}
