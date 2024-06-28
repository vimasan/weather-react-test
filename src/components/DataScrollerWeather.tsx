import {useState} from 'react'

import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Dialog } from 'primereact/dialog';
import { ViewWeather } from './ViewWeather';

import { WeatherModel } from '../models/weatherModel';

interface DataScrollerWeatherProps {
  weatherCityList: WeatherModel[];
  removeWeatherCity: (id: number) => void;
}

const imageWeather = (name: string) => `https://openweathermap.org/img/wn/${name}@2x.png`;

export const DataScrollerWeather = ({ weatherCityList, removeWeatherCity }: DataScrollerWeatherProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<WeatherModel>({} as WeatherModel);

  const viewDataWeather = (weatherCity: WeatherModel) => {
    setData(weatherCity);
    setVisible(true);
  }

  const itemTemplate = (data: WeatherModel) => {
    const image = imageWeather(data.weather[0].icon);
    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img className="w-9 sm:w-16rem xl:w-10rem block xl:block mx-auto" src={image} alt={data.name} />
                <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                    <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                        <div className="flex flex-column gap-1">
                            <div className="text-2xl font-bold text-900">{data.name}</div>
                            <div className="text-700">{data.coord.lat}, {data.coord.lon}</div>
                        </div>
                        <div className="flex flex-column gap-2">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-cloud" > </i>
                                <span className="font-semibold">{data.weather[0].description}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                        <Button icon="pi pi-trash" label="Remove" type='button' onClick={() => removeWeatherCity(data.id)}></Button>
                        <Button icon="pi pi-eye" label="View" type='button' onClick={() => viewDataWeather(data)}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  return (
    <>
      <DataScroller value={weatherCityList} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="Cities" />
      <Dialog header={data.name} visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <ViewWeather data={data} />
      </Dialog>
    </>
  )
}
