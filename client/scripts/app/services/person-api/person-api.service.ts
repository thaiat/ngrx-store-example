/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {HttpJson} from '../http-json/http-json.service';
import {RequestMethod} from 'angular2/http';
import {Person} from '../../interfaces';
/* beautify ignore:end */

@Injectable()
export class PersonApi {

    private url = 'http://localhost:3000/api/Persons';
    constructor(private httpJson: HttpJson) {

    }

    getAll() {
        return this.httpJson.execute({
            url: this.url,
            method: RequestMethod.Get
        });
    }

    create(person: Person) {
        return this.httpJson.execute({
            url: this.url,
            method: RequestMethod.Post,
            body: person
        });
    }

    delete(person: Person) {
        return this.httpJson.execute({
            url: this.url + '/' + person.id,
            method: RequestMethod.Delete
        });
    }
}
