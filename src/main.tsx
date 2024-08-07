import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
