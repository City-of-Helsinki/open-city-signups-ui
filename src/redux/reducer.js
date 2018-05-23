import {combineReducers} from 'redux';
import {reducer as oidcReducer} from 'redux-oidc';

import {reducer as intlReducer} from '../intl/redux';

export default combineReducers({
  intl: intlReducer,
  oidc: oidcReducer,
});
