import React, {useContext} from 'react';
import {MyEventContext} from 'services/events/MyEvent.context';
import EventList from 'components/events/EventList.component';
import EmptyList from 'components/EmptyList.component';

const MyEventsView = ({navigation}) => {
  const eventContext = useContext(MyEventContext);
  return (
    <EventList
      {...eventContext}
      navigation={navigation}
      ListEmptyComponent={
        <EmptyList text="Na ten moment nie bierzesz udziału w żadnej akcji" />
      }
    />
  );
};

export default MyEventsView;
