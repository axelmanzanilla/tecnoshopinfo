import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Ventas from './components/Ventas';
import Navbar from './components/Navbar';
import NuevoProducto from './components/NuevoProducto';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/ventas' component={Ventas}/>
        <Route path='/nuevo-producto' component={NuevoProducto}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
