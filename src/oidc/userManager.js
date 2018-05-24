import {createUserManager} from 'redux-oidc';
import {apiTokenAudience, openIdConnectClientId} from '../env';

const config = {
  client_id: openIdConnectClientId,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'id_token token',
  scope: `openid profile ${apiTokenAudience}`,
  authority: 'https://api.hel.fi/sso/openid/',
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const userManager = createUserManager(config);

export default userManager;
