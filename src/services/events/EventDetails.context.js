import React, {createContext, useContext, useState} from 'react';
import EventService from './Event.service';
import {EventContext} from 'services/events/Event.context';
import {MyEventContext} from 'services/events/MyEvent.context';
import {AuthContext} from 'services/auth/Login.context';
import useUpdateEvents from 'utils/hooks/useUpdateEvents';
import {AlertContext} from 'services/utils/Alert.context';
import {LoaderContext} from 'services/utils/Loader.context';

export const EventDetailsContext = createContext();

export const EventDetailsContextProvider = ({initEvent, children}) => {
  const {user} = useContext(AuthContext);
  const {setEvents} = useContext(EventContext);
  const {getEvents} = useContext(MyEventContext);
  const [selectedHours, setSelectedHours] = useState(initEvent.hours);
  const [event, setEvent] = useState(initEvent);
  const updateEvents = useUpdateEvents(
    event,
    setEvent,
    setEvents,
    getEvents,
    selectedHours
  );
  const {showAlert} = useContext(AlertContext);
  const {setLoading} = useContext(LoaderContext);

  const handleSignUp = () => {
    const hours = selectedHours.filter(h => h.signedUp).map(h => h.id);
    if (hours.length === 0) {
      showAlert('Nie wybrano godzin');
    } else {
      setLoading(true);
      EventService.signUp(user, event.id, hours)
        .then(res => {
          setLoading(false);
          res.status === 201 && updateEvents('signUp');
          showAlert(res.body.detail || 'Coś poszło nie tak');
        })
        .catch(err => showAlert(err))
        .finally(() => setLoading(false));
    }
  };

  const handleSignOff = () => {
    setLoading(true);
    EventService.signOff(user, event.id)
      .then(res => {
        setLoading(false);
        res.status === 200 && updateEvents('signOff');
        showAlert(res.body.detail || 'Coś poszło nie tak');
      })
      .catch(err => showAlert(err))
      .finally(() => setLoading(false));
  };
  return (
    <EventDetailsContext.Provider
      value={{
        event,
        handleSignUp,
        handleSignOff,
        selectedHours,
        setSelectedHours
      }}>
      {children}
    </EventDetailsContext.Provider>
  );
};
