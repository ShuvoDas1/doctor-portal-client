import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact  path='/'>
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
