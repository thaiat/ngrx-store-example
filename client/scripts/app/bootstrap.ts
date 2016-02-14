///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { MainComponent } from './components/main/main.component';
import { provideStore } from '@ngrx/store';
import { counter, persons, books, grid } from './reducers';
import { CounterActions, PersonActions, BookActions, GridActions } from './actions';
import { HttpJson } from './services/http-json/http-json.service';
import { PersonApi } from './services/person-api/person-api.service';
import { BookApi } from './services/book-api/book-api.service';

//import {enableProdMode} from 'angular2/core';
//enableProdMode();

bootstrap(MainComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {
        useClass: HashLocationStrategy
    }),
    provideStore({
        counter,
        persons,
        books,
        grid
    }),
    CounterActions,
    PersonActions,
    BookActions,
    GridActions,
    HttpJson,
    PersonApi,
    BookApi
]);
