/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {HttpJson} from '../http-json/http-json.service';
import {RequestMethod} from 'angular2/http';
import {Observable} from 'rxjs';
/* beautify ignore:end */

const BASE_URL = 'http://localhost:3000/api';

interface PersistedModel {
    id?: string;
}

@Injectable()
export class LoopbackApi<T extends PersistedModel> {

    protected endpoint: string;
    protected httpJson: HttpJson;

    getAll(): Observable<Array<T>> {
        return this.httpJson.execute({
            url: `${BASE_URL}/${this.endpoint}`,
            method: RequestMethod.Get
        });
    }

	create(entity: T): Observable<T> {
        return this.httpJson.execute({
            url: `${BASE_URL}/${this.endpoint}`,
            method: RequestMethod.Post,
            body: entity
        });
    }

	delete(entity: T): Observable<T> {
        return this.httpJson.execute({
            url: `${BASE_URL}/${this.endpoint}/${entity.id}`,
            method: RequestMethod.Delete
        }).map(res => entity);
    }
}
