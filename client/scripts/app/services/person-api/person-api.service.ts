/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Request} from '../request/request.service';
import {RequestMethod} from 'angular2/http';
import {Person} from '../../interfaces/person/person.interface';
/* beautify ignore:end */

@Injectable()
export class PersonApi {

    private url = 'http://localhost:3000/api/Persons';
    constructor(private request: Request) {

    }

    getAll() {
        return this.request.request({
            url: this.url,
            method: RequestMethod.Get
        });
    }

    create(person: Person) {
        return this.request.request({
            url: this.url,
            method: RequestMethod.Post,
            body: person
        });
    }

    delete(person: Person) {
        return this.request.request({
            url: this.url + '/' + person.id,
            method: RequestMethod.Delete
        });
    }

}
