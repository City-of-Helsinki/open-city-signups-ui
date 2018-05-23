import {createUserManager} from 'redux-oidc';
import readEnv from '../util/readEnv';

const config = {
  client_id: readEnv('REACT_APP_OPENID_CONNECT_CLIENT_ID'),
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'id_token token',
  scope: 'openid profile',
  authority: 'https://api.hel.fi/sso/openid/',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const userManager = createUserManager(config);

export default userManager;
