import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {WeatherComponent} from "./weather/weather.component";

@Component({
    template: "<h1>Page 2</h1>"
})
class Page2 { }


@Component({
    selector: "my-app",
    templateUrl: "views/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/weather', name: 'Weather', component: WeatherComponent, useAsDefault: true},
    {path:'/page2', name: 'Page2', component: Page2},
])
export class AppComponent {

}
