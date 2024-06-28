import { WeatherModel } from '../models/weatherModel';

interface ViewWeatherProps {
  data: WeatherModel;
}

export const ViewWeather = ({ data }: ViewWeatherProps) => {
  return (
      <p className="m-0">
          {data.name}
          {data.weather[0].description}
          {data.weather[0].icon}
      </p>
  )
}
