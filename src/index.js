import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import  ReactDOM  from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Create from './compoments/Create';
import Read from './compoments/Read';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
 
);
reportWebVitals();

