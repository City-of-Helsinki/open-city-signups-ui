import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {OidcProvider} from 'redux-oidc';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import './index.global.scss';
import App from './components/App/App';
import LandingPage from './components/Landingpage/Landing';
import NotFound from './components/Notfound/Notfound';
import CallbackPage from './components/CallbackPage/CallbackPage';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import userManager from './oidc/userManager';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/404' component={NotFound}/>
            <Route exact path='/callback' component={CallbackPage}/>
            <Redirect from='*' to='/404' />
          </Switch>
        </BrowserRouter>
      </App>
    </OidcProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
