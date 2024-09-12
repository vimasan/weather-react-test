import { ReactNode, useState } from 'react';
import { WeatherContext } from './WeatherContext.tsx';
import { WeatherInterface } from '../interfaces/weatherInterface.ts';

export const WeatherProvider = ({ children } : { children: ReactNode }) => {

  const [weatherCityList, setWeatherCityList] = useState<WeatherInterface[]>(
    [] as WeatherInterface[]
  );

  const addWeatherCity = (weatherCity: WeatherInterface) => {
    setWeatherCityList([...weatherCityList, weatherCity]);
  };

  const updateWeatherCity = (weatherCity: WeatherInterface) => {
    setWeatherCityList((prevWeatherCityList) => {
      const newWeatherCityList = [...prevWeatherCityList];
      const index = newWeatherCityList.findIndex(
        (city) => city.id === weatherCity.id
      );
      newWeatherCityList[index] = weatherCity;
      return newWeatherCityList;
    });
  };

  const processWeatherCity = (weatherCity: WeatherInterface) => {
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

