import { useState } from "react"

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Fieldset } from 'primereact/fieldset';
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from 'primereact/toast';
import { useRef } from "react";
import { getWeatherForCity } from "../api/weatherApi";
import { WeatherModel } from "../models/weatherModel";

export const InputCity = () => {
  const toast = useRef<Toast>(null);
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherModel>({} as WeatherModel);

  const findWeather = async ()  => {
    try{
      const data = await getWeatherForCity(city);
      setWeather(data);
    } catch (error) {
      const message = `City ${city} not found`;
      toast.current?.show({severity:'error', summary: 'Error', detail: message, life: 6000});
    }

    setCity('');
  }

  return (
    <>
      <Toast ref={toast} />
      <Fieldset legend="Weather Application">
        <div className="p-inputgroup flex-1">
          <FloatLabel>
            <InputText id="City" value={city} onChange={(e) => setCity(e.target.value)} keyfilter={'alpha'}/>
            <label htmlFor="City">City</label>
          </FloatLabel>
          <Button icon="pi pi-search" className="p-button-warning" onClick={findWeather}/>
        </div>
      </Fieldset >
      <p>{weather ? JSON.stringify(weather) : 'leyendo'}</p>
    </>
  );
}
