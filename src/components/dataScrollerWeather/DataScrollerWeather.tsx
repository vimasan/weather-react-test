import {useState} from 'react'

import { DataScroller } from 'primereact/datascroller';
import { Dialog } from 'primereact/dialog';
import { ViewWeather } from '../ViewWeather';

import { WeatherModel } from '../../models/weatherModel';
import './DataScrollerWeather.css'

interface DataScrollerWeatherProps {
  weatherCityList: WeatherModel[];
  removeWeatherCity: (id: number) => void;
}

const imageWeather = (name: string) => `https://openweathermap.org/img/wn/${name}@2x.png`;

const capitalizefirstLetter = (phrase: string) : string => {
  if (!phrase) return phrase;
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

const lastUpdate = (dt: number) : string => {
  return new Date(dt * 1000).toLocaleTimeString();
}

export const DataScrollerWeather = ({ weatherCityList, removeWeatherCity }: DataScrollerWeatherProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<WeatherModel>({} as WeatherModel);

  const viewDataWeather = (weatherCity: WeatherModel) => {
    setSelectedCity(weatherCity);
    setVisible(true);
  }

  const itemTemplate = (data: WeatherModel) => {
    const image = imageWeather(data.weather[0].icon);
    return (
      <div className="weather-card">
        <div className="weather-header">
            <h2>{data.name}</h2>
            <div>
              <span className='last-update'> Last update: {lastUpdate(data.dt)}</span>
              <span className="view-button pi pi-eye" onClick={() => viewDataWeather(data)}/>
              <span className="close-button pi pi-times" onClick={() => removeWeatherCity(data.id)}/>
            </div>
        </div>
        <div className="weather-content">
            <div className="weather-main">
                <img src={image} alt="Icono del clima"/>
                <div className="temperature">{data.main.temp}º</div>
                <div>

                    <div className="condition left-align">{capitalizefirstLetter(data.weather[0]?.description)}</div>
                    <div className="feels-like left-align">Thermal sensation: {data.main.feels_like}º</div>
                </div>
            </div>
            <div className="weather-details">
                <ul>
                    <li><span className='bolded'>Humidity:</span> {data.main.humidity} %</li>
                    <li><span className='bolded'>Pressure:</span> {data.main.pressure} mbar</li>
                    <li><span className='bolded'>Wind:</span> {data.wind.speed} km/h</li>
                </ul>
            </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <DataScroller value={weatherCityList} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="Cities" />
      <Dialog header={selectedCity.name} visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <ViewWeather data={selectedCity} />
      </Dialog>
    </>
  )
}
