import React, {Component} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import './App.css'

import LandingPage from '../Landingpage/Landing';
import NotFound from '../Notfound/Notfound';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/signup' render={()=><LandingPage title='Home Page'/>}/>
          <Route path='/about' render={()=><LandingPage title='About Page'/>}/>
          <Route path='/help' render={()=><LandingPage title='Help Page'/>}/>
          <Route path='/services' render={()=><LandingPage title='Services Page'/>}/>
          <Redirect from='/' to = '/signup' exact={true} />
          <Route path='/404' render={()=><NotFound/>}/>
          <Redirect from='*' to = '/404' exact={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
