import { useState } from 'react'
import { InputCity } from './components/InputCity';
import { DataScrollerWeather } from './components/dataScrollerWeather/DataScrollerWeather';
// import { Button } from "primereact/button";

import { WeatherModel } from './models/weatherModel';

import './App.css'

function App() {

  const [weatherCityList, setWeatherCityList] = useState<WeatherModel[]>([] as WeatherModel[]);

  const addWeatherCity = (weatherCity: WeatherModel) => {
    setWeatherCityList([...weatherCityList, weatherCity ]);
  }

  const removeWeatherCity = (id: number) => {
    const weatherCityListUpdate = weatherCityList.filter(weatherCity => weatherCity.id !== id);
    setWeatherCityList(weatherCityListUpdate);
  }

  return (
    <>
      <InputCity addWeatherCity={addWeatherCity}/>
      {/* <Button icon="pi pi-refresh" /> */}
      <DataScrollerWeather weatherCityList={weatherCityList} removeWeatherCity={removeWeatherCity}/>
    </>
  );
}

export default App;
