import React, {useContext} from 'react';
import {EventContext} from 'services/events/Event.context';
import EventList from 'components/events/EventList.component.js';
import EmptyList from 'components/EmptyList.component';

const EventsView = ({navigation}) => {
  const eventContext = useContext(EventContext);
  return (
    <EventList
      {...eventContext}
      navigation={navigation}
      showFilters
      ListEmptyComponent={<EmptyList text="Brak akcji w podanym terminie." />}
    />
  );
};

export default EventsView;
