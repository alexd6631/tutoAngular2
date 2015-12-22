import {AppComponent} from "./app.component";
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import {WeatherService} from "./weather/weather.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {Http} from "angular2/http";
import {provide} from "angular2/core";
import {config} from "./config";

const configProvider = provide("app.config", {useValue: config});

const weatherProvider = provide(WeatherService, {
    useFactory: (http:Http, config) => new WeatherService(http, config.apiKey),
    deps: [Http, "app.config"]
});

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, configProvider, weatherProvider]);