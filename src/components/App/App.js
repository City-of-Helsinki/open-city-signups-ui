import React, {Component} from 'react'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import logo from '../../assets/logo.svg'
import './App.css'

class App extends Component {

	Home = props => {
		return (
		  <div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1 className='App-title'>Welcome to React</h1>
				</header>
				<p className='App-intro'>
				{props.title}
				</p>
      		</div>
		)
	  }
	  
	  NotFound = () => {
		return (
		  <div className='App'>
			  <p className='intro'>
				Page not Found!!!
			  </p>
			</div>
		)
	  }
  render() {
    return (
	  <BrowserRouter>
				<Switch>
					<Route path='/signup' render={()=><this.Home title='Home Page'/>}/>
					<Route path='/about' render={()=><this.Home title='About Page'/>}/>
					<Route path='/help' render={()=><this.Home title='Help Page'/>}/>
					<Route path='/services' render={()=><this.Home title='Services Page'/>}/>ok
					<Redirect from='/' to = '/signup' exact={true} />
					<Route component={this.NotFound}/>
				</Switch>
			</BrowserRouter>
    );
  }
}



export default App;
