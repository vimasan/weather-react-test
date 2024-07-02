import { WeatherModel } from '../../models/weatherModel';
import { ForecastModel } from '../../models/forecastModel';
import './ViewInfo.css'
import { imageWeather, dataTimerFormater } from '../Utils';

interface ViewInfoProps {
  selectedCity: WeatherModel;
  forecastCity: ForecastModel | null;
}

export const ViewInfo = ({ selectedCity, forecastCity }: ViewInfoProps) => {
  return (
    <div className="forecast-card">
      <div className="forecast-main">
        <img className="forecast-icon" src={imageWeather(selectedCity.weather[0].icon)} alt="image"/>
        <div className="temperature">
          <div>{selectedCity.main.temp} ºC</div>
          <div className="temp-range">
            <span className="temp-max">↑{selectedCity.main.temp_max} º</span>
            <span className="temp-min">↓{selectedCity.main.temp_min} º</span>
          </div>
        </div>
      </div>
      <div className='font-weight-bold'>Predicción para 24 horas</div>
      <div className="forecast-detail">
        {forecastCity?.list.map((item) => (
          <div className="forecast-item">
            <div className="time font-weight-bold">{dataTimerFormater(item.dt)}</div>
            <img className="forecast-icon-item" src={imageWeather(item.weather[0].icon)}/>
            <div className="temp">{item.main.temp}°</div>
            <div className="description">{item.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
