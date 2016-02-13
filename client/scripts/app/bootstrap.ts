///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
/* beautify ignore:start */
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MainComponent} from './components/main/main.component';
import {provideStore} from '@ngrx/store';
import {counter, persons} from './reducers';
import {CounterActions, PersonActions} from './actions';
import {HttpJson} from './services/http-json/http-json.service';
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
    HttpJson,
    PersonApi
]);
