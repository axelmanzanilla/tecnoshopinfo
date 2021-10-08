import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Product/Product';
import Ventas from './components/Ventas/Ventas';
import Navbar from './components/Navbar/Navbar';
import NewProduct from './components/NewProduct/NewProduct';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/producto/:id' component={Product}/>
        <Route path='/ventas' component={Ventas}/>
        <Route path='/nuevoproducto' component={NewProduct}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
