import { WeatherModel } from "../models/weatherModel";

export interface WeatherContextValue {
  weatherCityList: WeatherModel[];
  processWeatherCity: (weatherCity: WeatherModel) => void;
  removeWeatherCity: (id: number) => void;
}
