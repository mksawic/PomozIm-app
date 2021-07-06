import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {
  EventCardWrapper,
  EventCardImage,
  EventCardBody,
  EventInfoWrapper,
  EventName,
  EventIcon
} from 'components/events/Event.styles';
import Text from 'components/Text.component';
import StatusLabel from './StatusLabel.component';

const EventCard = ({event = {}, navigation}) => {
  const {
    name = '',
    croppedImage = 'https://via.placeholder.com/400x300.png?text=Placeholder',
    content = '',
    place = '',
    volunteersNeeded = 10,
    volunteersSigned = 0,
    eventDate = '-',
    startTime = '',
    endTime = '',
    signedUp = false
  } = event;

  const getTime = t => t.match(/\d\d:\d\d/g)[0];

  return (
    <EventCardWrapper>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('EventDetails', {...event})}>
        <View>
          <EventCardImage source={{uri: croppedImage}}>
            {signedUp && <StatusLabel />}
          </EventCardImage>
          <EventCardBody>
            <EventName variant="h2" color="primary">
              {name}
            </EventName>
            <Text>
              {content.length < 150 ? content : content.slice(0, 150) + '...'}
            </Text>
            <EventInfoWrapper>
              <EventIcon center name="map-pin">
                {place}
              </EventIcon>
              <EventIcon name="calendar">{eventDate}</EventIcon>
              <EventIcon name="clock">
                {getTime(startTime)} - {getTime(endTime)}
              </EventIcon>
              <EventIcon name="user">
                {volunteersSigned} / {volunteersNeeded}
              </EventIcon>
            </EventInfoWrapper>
          </EventCardBody>
        </View>
      </TouchableNativeFeedback>
    </EventCardWrapper>
  );
};

export default EventCard;
