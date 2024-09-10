
import { InputCity } from './components/inputCity/InputCity';
import { DataScrollerWeather } from './components/dataScrollerWeather/DataScrollerWeather';

import './App.css';

function App() {

  return (
    <>
      <div className="title">Weather App</div>
      <InputCity />
      {/* <Button icon="pi pi-refresh" /> */}
      <DataScrollerWeather/>
    </>
  );
}

export default App;
