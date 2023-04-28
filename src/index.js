import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes_RotasPrincipais from './routes';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes_RotasPrincipais />
    </BrowserRouter>
  </React.StrictMode>
);