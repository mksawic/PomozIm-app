import {API_URL} from '@env';

export const loginRequest = credentials =>
  fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  }).then(res =>
    res.json().then(data => ({
      body: data,
      status: res.status
    }))
  );

export const refreshRequest = refreshToken =>
  fetch(`${API_URL}/users/login/refresh`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({refresh: refreshToken})
  }).then(res =>
    res.json().then(data => ({
      body: data,
      status: res.status
    }))
  );
