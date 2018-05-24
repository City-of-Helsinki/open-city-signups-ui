import {combineReducers} from 'redux';
import {reducer as oidcReducer} from 'redux-oidc';

import {reducer as intlReducer} from '../intl/redux';
import {reducer as apiReducer} from '../api/redux';

export default combineReducers({
  intl: intlReducer,
  oidc: oidcReducer,
  api: apiReducer,
});
