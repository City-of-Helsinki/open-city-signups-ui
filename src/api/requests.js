import {fetchApiTokenUrl, apiTokenAudience, signupsApiUrl, signupTarget} from '../env';

export const fetchApiToken = (token) => {
  const headers = {'Authorization': `Bearer ${token}`};
  return fetch(fetchApiTokenUrl, {headers})
    .then(response => response.json())
    .then(data => {
      const token = data[apiTokenAudience];
      return token;
    });
};

export const createSignup = (token) => {
  const url =  `${signupsApiUrl}/v1/signup/`;
  const headers = {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'};
  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({target: signupTarget}),
  };
  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return true;
      }
      throw new Error(response.status);
    });
};
