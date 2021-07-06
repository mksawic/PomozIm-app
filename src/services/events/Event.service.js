import {API_URL} from '@env';
import {eventDate} from 'services/utils/Date.utils';

const getFilters = filters =>
  `&event_type=${filters?.eventType}&event_date_after=${eventDate(
    filters?.startDate
  )}&event_date_before=${eventDate(filters?.endDate)}`;

const EventService = {
  getEvents: (user, page = 1, filters) =>
    fetch(`${API_URL}/events?page=${page}${getFilters(filters)}`, {
      headers: {'x-access-token': `Bearer ${user.access}`}
    }).then(res =>
      res.json().then(data => ({
        body: data,
        status: res.status
      }))
    ),
  getMyEvents: (user, page = 1) =>
    fetch(`${API_URL}/events?page=${page}&is_signed=true`, {
      headers: {'x-access-token': `Bearer ${user.access}`}
    }).then(res =>
      res.json().then(data => ({
        body: data,
        status: res.status
      }))
    ),
  signUp: (user, eventId, hours) =>
    fetch(`${API_URL}/events/${eventId}/sign_up/`, {
      headers: {
        'x-access-token': `Bearer ${user.access}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({hours})
    }).then(res =>
      res.json().then(data => ({
        body: data,
        status: res.status
      }))
    ),
  signOff: (user, eventId) =>
    fetch(`${API_URL}/events/${eventId}/sign_off/`, {
      headers: {
        'x-access-token': `Bearer ${user.access}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }).then(res =>
      res.json().then(data => ({
        body: data,
        status: res.status
      }))
    )
};

export default EventService;
