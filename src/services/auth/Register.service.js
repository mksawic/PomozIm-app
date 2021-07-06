import {API_URL} from '@env';

export const registerRequest = body =>
  fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }).then(res =>
    res.json().then(data => ({
      body: data,
      status: res.status
    }))
  );
