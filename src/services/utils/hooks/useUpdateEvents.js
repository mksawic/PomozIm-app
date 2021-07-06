const useUpdateEvents = (event, setEvent, setEvents, getMyEvents, hours) => {
  const actions = {
    signUp: {
      signedUp: true,
      volunteersSigned: event.volunteersSigned + 1,
      hours: hours
    },
    signOff: {
      signedUp: false,
      volunteersSigned: event.volunteersSigned - 1,
      hours: hours.map(h => ({...h, signedUp: false}))
    }
  };
  const updateEvents = action => {
    const newEvent = {
      ...event,
      ...actions[action]
    };
    setEvent(newEvent);
    setEvents(events => {
      const i = events.findIndex(e => e.id === newEvent.id);
      return i < 0
        ? events
        : [...events.slice(0, i), newEvent, ...events.slice(i + 1)];
    });
    getMyEvents();
  };

  return updateEvents;
};

export default useUpdateEvents;
