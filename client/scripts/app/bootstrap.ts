///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
/* beautify ignore:start */
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MainComponent} from './components/main/main.component';
import {provideStore} from '@ngrx/store';
import {counter} from './reducers/counter';
import {persons} from './reducers/persons';
import {CounterActions} from './actions/CounterActions';
import {PersonActions} from './actions/PersonActions';
import {Request} from './services/request/request.service';
import {PersonApi} from './services/person-api/person-api.service';
/* beautify ignore:end */

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
        persons
    }),
    CounterActions,
    PersonActions,
    Request,
    PersonApi
]);
