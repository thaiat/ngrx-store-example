import { Injectable } from 'angular2/core';
import { HttpJson } from '../http-json/http-json.service';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';

interface PersistedModel {
    id?: string;
}

@Injectable()
export class LoopbackApi<T extends PersistedModel> {

    protected endpoint: string;
    protected httpJson: HttpJson;

    getAll(): Observable<Array<T>> {
        return this.httpJson.executeGet({
            url: `${BASE_URL}/${this.endpoint}`
        });
    }

    create(entity: T): Observable<T> {
        return this.httpJson.executePost({
            url: `${BASE_URL}/${this.endpoint}`,
            body: entity
        });
    }

    delete(entity: T): Observable<T> {
        return this.httpJson.executeDelete({
            url: `${BASE_URL}/${this.endpoint}/${entity.id}`
        }).map(res => entity);
    }
}
