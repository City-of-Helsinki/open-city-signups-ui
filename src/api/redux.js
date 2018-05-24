import {combineReducers} from 'redux';
import {createAction, handleActions} from 'redux-actions';
import {USER_FOUND} from 'redux-oidc';

import {fetchApiToken, createSignup} from './requests';

export const requestStart = createAction('api/requestStart');
export const apiError = createAction('api/error');
export const signupSuccess = createAction('api/signup/success');
export const signupExists = createAction('api/signupExists');

export const apiMiddleware = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case USER_FOUND:
      next(requestStart());
      fetchApiToken(action.payload.access_token)
        .then(token => createSignup(token))
        .then(ok => {
          if (ok) {
            next(signupSuccess());
          } else {
            next(signupExists());
          }
        })
        .catch(error => next(apiError()));
      break;
  }

  return result;
};


const returnFalse = () => false;
const returnTrue = () => true;

const isLoadingReducer = handleActions(
  {
    [requestStart]: returnTrue,
    [signupSuccess]: returnFalse,
    [signupExists]: returnFalse,
    [apiError]: returnFalse,
  },
  false
);

const isSuccessReducer = handleActions(
  {
    [signupSuccess]: returnTrue,
    [signupExists]: returnFalse,
    [apiError]: returnFalse,
  },
  false
);

const isErrorReducer = handleActions(
  {
    [apiError]: returnTrue,
    [signupSuccess]: returnFalse,
    [signupExists]: returnFalse,
  },
  false
);

const signupExistsReducer = handleActions(
  {
    [signupExists]: returnTrue,
  },
  false
);

export const reducer = combineReducers({
  isLoading: isLoadingReducer,
  isSuccess: isSuccessReducer,
  isError: isErrorReducer,
  signupExists: signupExistsReducer,
});

