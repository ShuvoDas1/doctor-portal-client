import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =  useState({
    name: '',
    email: ''
  })
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact  path='/'>
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/dashboard/appointments'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
