import React, { Component } from 'react';
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
import { Route } from 'react-router';

import HomepageLayout from "./HomepageLayout";
import Service from "./Service"
import  Company from "./Company"
import Login from "./Login"
import Contact from "./Contact";
import Dashboard from "./Dashboard"
import CreateWork from "./CreateWork";

class App extends Component {

  render(){
      return(

          <Router>
              <div>
                  <Route exact path='/' component = {HomepageLayout} />
                   <Route exact path='/index' component = {HomepageLayout} />
                  <Route path='/services' component = {Service} />
                  <Route path='/company' component = {Company} />
                  <Route path='/contact' component = {Contact} />
                  <Route path='/login' component = {Login} />
                  <Route path='/dashboard' component = {Dashboard} />
                  <Route path='/create' component = {CreateWork} />

              </div>
          </Router>

      )
  }
}

export default App;
