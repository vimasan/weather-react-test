import { ReactNode, useState } from 'react';
import { WeatherContext } from './WeatherContext.tsx';
import { WeatherModel } from '../models/weatherModel';

export const WeatherProvider = ({ children } : { children: ReactNode }) => {

  const [weatherCityList, setWeatherCityList] = useState<WeatherModel[]>(
    [] as WeatherModel[]
  );

  const addWeatherCity = (weatherCity: WeatherModel) => {
    setWeatherCityList([...weatherCityList, weatherCity]);
  };

  const updateWeatherCity = (weatherCity: WeatherModel) => {
    setWeatherCityList((prevWeatherCityList) => {
      const newWeatherCityList = [...prevWeatherCityList];
      const index = newWeatherCityList.findIndex(
        (city) => city.id === weatherCity.id
      );
      newWeatherCityList[index] = weatherCity;
      return newWeatherCityList;
    });
  };

  const processWeatherCity = (weatherCity: WeatherModel) => {
    const weatherCityExisting = weatherCityList.find(
      (city) => city.id === weatherCity.id
    );

    if (weatherCityExisting === undefined) {
      addWeatherCity(weatherCity);
    } else {
      updateWeatherCity(weatherCity);
    }

    return;
  };

  const removeWeatherCity = (id: number) => {
    const weatherCityListUpdate = weatherCityList.filter(
      (weatherCity) => weatherCity.id !== id
    );
    setWeatherCityList(weatherCityListUpdate);
  };

  return (
    <WeatherContext.Provider value={{ weatherCityList, processWeatherCity, removeWeatherCity } }>
      { children }
    </WeatherContext.Provider>
  );
};

