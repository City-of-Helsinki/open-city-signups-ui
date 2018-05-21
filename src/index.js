import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData} from 'react-intl';
import {Provider} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import './index.global.scss';
import App from './components/App/App';
import LandingPage from './components/Landingpage/Landing';
import NotFound from './components/Notfound/Notfound';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import ConnectedIntlProvider from './intl/ConnectedIntlProvider';
import getIntlLocaleData from './intl/getIntlLocaleData';

const intlLocaleData = getIntlLocaleData();
addLocaleData(intlLocaleData);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/404' component={NotFound}/>
            <Redirect from='*' to='/404' />
          </Switch>
        </BrowserRouter>
      </App>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
