import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Route from "react-router-dom";
// import { BrowserRouter, Routes } from "react-router-dom";

// import {createRoot} from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.unregister();
reportWebVitals();