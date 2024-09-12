import { ForecastInterface } from '../interfaces/forecastInterface';
import { WeatherInterface } from '../interfaces/weatherInterface';
import axios from 'axios';

const VITE_APP_WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
const units = 'metric';
const lang = 'es';
const cnt = 9;

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherForCity = async (city: string) : Promise<WeatherInterface> => {

  const response = await axios.get('/weather', {
    params: {
      q: city,
      units,
      lang,
      appid: VITE_APP_WEATHER_API_KEY,
    }
  });

  return response.data;
};

export const getForecastForCityId = async (id: number) : Promise<ForecastInterface> => {

  const response = await axios.get('/forecast', {
    params: {
      id,
      units,
      lang,
      cnt,
      appid: VITE_APP_WEATHER_API_KEY,
    }
  });

  return response.data;
};
