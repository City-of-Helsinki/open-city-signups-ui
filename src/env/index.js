
function readEnv(name) {
  if (process.env[name]) {
    return process.env[name];
  }
  throw Error(`Could not read env (${name})`);
}

export const openIdConnectClientId = readEnv('REACT_APP_OPENID_CONNECT_CLIENT_ID');
export const signupsApiUrl = readEnv('REACT_APP_SIGNUPS_API_URL');
export const fetchApiTokenUrl = readEnv('REACT_APP_SIGNUPS_API_TOKEN_FETCH_URL');
export const apiTokenAudience = readEnv('REACT_APP_SIGNUPS_API_TOKEN_AUDIENCE');
export const signupTarget = readEnv('REACT_APP_SIGNUP_TARGET');
