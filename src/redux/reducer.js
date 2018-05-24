import {combineReducers} from 'redux';
import {reducer as oidcReducer} from 'redux-oidc';

import {reducer as apiReducer} from '../api/redux';

export default combineReducers({
  oidc: oidcReducer,
  api: apiReducer,
});
