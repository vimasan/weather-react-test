import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';
import { WeatherProvider } from './context/WeatherProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
);
