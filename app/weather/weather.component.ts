import {Component} from "angular2/core";
import {WeatherService} from "./weather.service";
import WeatherData = models.WeatherData;

@Component({
    templateUrl : "app/weather/weather.html"
})
export class WeatherComponent {
    loading = false;
    weather: WeatherData;
    error: any;

    constructor(private weatherService: WeatherService) {

    }

    fetchWeather(city) {
        this.weather = null;
        this.error = null;
        this.loading = true;
        this.weatherService.getWeather(city).subscribe(weather => {
            this.weather = weather;
            this.loading = false;
        }, err => {
            this.error = err;
            this.loading = false;
        });
    }

    diag() {
        return JSON.stringify(this.weather);
    }
}