import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData} from 'react-intl';
import {Provider} from 'react-redux';

import './index.global.scss';
import App from './components/App/App';
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
      <App />
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
