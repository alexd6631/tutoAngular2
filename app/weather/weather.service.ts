import {Http} from "angular2/http";
import WeatherData = models.WeatherData;
import "rxjs/add/operator/map"
import "rxjs/add/operator/retry"
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WeatherService {

    constructor(private http: Http, private apiKey:string) {}

    /**
     * Get current weather in city
     * @param city
     * @returns {Observable<WeatherData>}
     */
    getWeather(city): Observable<WeatherData> {
        const uri = 'http://api.openweathermap.org/data/2.5/weather' +
            '?q=' + encodeURIComponent(city) + '&APPID=' + this.apiKey +
            '&units=metric';

        return this.http.get(uri).retry(4).map(res => {
            const data = res.json();
            if (data.cod != "200") {
                throw new Error()
            }
            return data;
        });
    }
}
