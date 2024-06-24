import './App.css'
import { useState } from "react"
import { InputCity } from './components/InputCity';
import { WeatherModel } from './models/weatherModel';

function App() {

  const [weatherCityList, setWeatherCityList] = useState<WeatherModel[]>([] as WeatherModel[]);

  const addWeatherCity = (weatherCity: WeatherModel) => {
    setWeatherCityList([...weatherCityList, weatherCity ]);
  }

  return (
    <>
      <InputCity addWeatherCity={addWeatherCity}/>
      <p>{weatherCityList ? JSON.stringify(weatherCityList) : 'reading...'}</p>
    </>
  );
}

export default App;
