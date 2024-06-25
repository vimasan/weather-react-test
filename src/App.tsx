import './App.css'
import { useState } from 'react'
import { InputCity } from './components/InputCity';
import { WeatherModel } from './models/weatherModel';
import { DataScrollerWeather } from './components/DataScrollerWeather';

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
      <DataScrollerWeather weatherCityList={weatherCityList} removeWeatherCity={removeWeatherCity}/>
    </>
  );
}

export default App;
