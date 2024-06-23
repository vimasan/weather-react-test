import { WeatherModel } from '../models/weatherModel';
import axios from 'axios';

const VITE_APP_WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherForCity = async (city: string) : Promise<WeatherModel> => {

  const response = await axios.get('/weather', {
    params: {
      q: city,
      units: 'metric',
      lang: 'es',
      appid: VITE_APP_WEATHER_API_KEY,
    }
  });

  return response.data;
}