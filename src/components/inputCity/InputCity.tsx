import { useState, FormEvent, useRef } from "react"

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';

import { getWeatherForCity } from "../../api/weatherApi";
import { WeatherModel } from "../../models/weatherModel";
import './inputCity.css'

interface InputCityProps {
  addWeatherCity: (weatherCity: WeatherModel) => void;
}

export const InputCity = ({ addWeatherCity }: InputCityProps) => {
  const toast = useRef<Toast>(null);
  const [city, setCity] = useState<string>('');

  const findWeather = async ()  => {
    try{
      const weather = await getWeatherForCity(city);
      addWeatherCity(weather);
    } catch (error) {
      const message = `City ${city} not found`;
      toast.current?.show({severity:'error', summary: 'Error', detail: message, life: 6000});
    }

    setCity('');
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    findWeather();
  }

  const disabled = city.trim().length === 0;

  return (
    <>
      <Toast ref={toast} />
      <div className="input-city">
        <form className="p-fluid" onSubmit={onSubmit}>
          <label className="" htmlFor="City">City</label>
          <div className="p-inputgroup">
            <InputText value={city} onChange={(e) => setCity(e.target.value)} keyfilter={'alpha'}/>
            <Button icon="pi pi-search" className="p-button-success" type="submit" disabled={disabled}/>
          </div>
        </form>
      </div>
    </>
  );
}
