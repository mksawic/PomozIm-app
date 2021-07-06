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

export const MyEventContext = createContext();

export const MyEventContextProvider = ({children}) => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {user, onLogout} = useContext(AuthContext);

  const getEvents = useCallback(
    (p = 1) => {
      setIsLoading(true);
      setError(null);
      EventService.getMyEvents(user, p)
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
    [user, onLogout]
  );

  useEffect(() => {
    user ? getEvents() : null;
  }, [user, getEvents]);

  return (
    <MyEventContext.Provider
      value={{
        events,
        count,
        isLoading,
        error,
        getEvents,
        setEvents
      }}>
      {children}
    </MyEventContext.Provider>
  );
};
