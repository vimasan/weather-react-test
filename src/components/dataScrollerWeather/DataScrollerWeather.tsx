import { useState } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Dialog } from 'primereact/dialog';
import { ViewInfo } from '../ViewInfo/ViewInfo';
import { WeatherInterface } from '../../interfaces/weatherInterface';
import { ForecastInterface } from '../../interfaces/forecastInterface';
import { getForecastForCityId } from '../../api/weatherApi';
import { capitalizefirstLetter, imageWeather, lastUpdate } from '../Utils';
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import './DataScrollerWeather.css';

export const DataScrollerWeather = () => {
  const { weatherCityList, removeWeatherCity } = useContext(WeatherContext);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<WeatherInterface>({} as WeatherInterface);
  const [forecast, setForecast] = useState<ForecastInterface | null>(null);

  const viewDataWeather = async (weatherCity: WeatherInterface) => {
    setForecast(await getForecastForCityId(weatherCity.id));
    setSelectedCity(weatherCity);
    setVisible(true);
  };

  const itemTemplate = (data: WeatherInterface) => {
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
                <img src={image} alt="Weather image"/>
                <div className="temperature">{data.main.temp}º</div>
                <div>
                    <div className="condition left-align">{capitalizefirstLetter(data.weather[0]?.description)}</div>
                    <div className="feels-like left-align">Thermal sensation: {data.main.feels_like}º</div>
                </div>
            </div>
            <div className="weather-details">
                <ul>
                    <li><span>Humidity:</span> {data.main.humidity} %</li>
                    <li><span>Pressure:</span> {data.main.pressure} mbar</li>
                    <li><span>Wind:</span> {data.wind.speed} km/h</li>
                </ul>
            </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <DataScroller value={weatherCityList} itemTemplate={itemTemplate} rows={25} buffer={0.4} header="Cities" />
      <Dialog header={selectedCity.name} visible={visible} style={{ width: '55vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <ViewInfo selectedCity={selectedCity} forecastCity={forecast} />
      </Dialog>
    </>
  );
};
