import { WeatherInterface } from "../interfaces/weatherInterface";

export interface WeatherContextValue {
  weatherCityList: WeatherInterface[];
  processWeatherCity: (weatherCity: WeatherInterface) => void;
  removeWeatherCity: (id: number) => void;
}
