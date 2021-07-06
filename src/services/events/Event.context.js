import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useCallback
} from 'react';
import camelize from 'camelize';
import EventService from './Event.service';
import {AuthContext} from 'services/auth/Login.context';

export const EventContext = createContext();

export const EventContextProvider = ({children}) => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    eventType: '',
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 2592000000)
  });
  const {user, onLogout} = useContext(AuthContext);

  const getEvents = useCallback(
    (p = 1) => {
      setIsLoading(true);
      setError(null);
      EventService.getEvents(user, p, filters)
        .then(response => {
          if (response.status === 200) {
            setCount(response.body.count);
            return camelize(response.body.results);
          } else {
            onLogout();
          }
        })
        .then(response =>
          setEvents(prevEvents =>
            p !== 1 ? [...prevEvents, ...response] : response
          )
        )
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    },
    [user, filters, onLogout]
  );

  useEffect(() => {
    user ? getEvents() : null;
  }, [user, filters, getEvents]);

  return (
    <EventContext.Provider
      value={{
        events,
        count,
        isLoading,
        error,
        getEvents,
        setEvents,
        filters,
        setFilters
      }}>
      {children}
    </EventContext.Provider>
  );
};
