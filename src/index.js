import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to='/'>Dashboard</Link>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
