import { createContext } from 'react';
import { WeatherContextValue } from './weatherContextValue';

// export const WeatherContext = createContext<WeatherContextValue>();
// export const WeatherContext = createContext('');

export const WeatherContext = createContext<WeatherContextValue>({
  weatherCityList: [],
  processWeatherCity: () => {},
  removeWeatherCity: () => {}
});