import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProviderValues } from "./context/state.context";

ReactDOM.render(
  <React.StrictMode>
    <ProviderValues>
      <App />
    </ProviderValues>
  </React.StrictMode>,
  document.getElementById('root')
);