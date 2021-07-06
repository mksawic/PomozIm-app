import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  EventDetailsContextProvider,
  EventDetailsContext
} from 'services/events/EventDetails.context';
import {
  EventCardImage,
  EventCardBody,
  EventInfoWrapper,
  EventName,
  EventIcon
} from 'components/events/Event.styles';
import StatusLabel from 'components/events/StatusLabel.component';
import EventHours from 'components/events/details/EventHours.component';
import Text from 'components/Text.component';
import Button from 'components/Button.component';
import AdditionalInfo from 'components/events/details/AdditionalInfo.component';

const EventDetailsWrapper = styled(ScrollView)`
  margin-top: ${({insets}) => insets.top}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const ReturnButton = styled(Button)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const SignButton = styled(Button)`
  max-width: 50%;
  align-self: center;
  margin-top: 16px;
`;

const EventDetails = ({route, navigation: {goBack}}) => {
  const insets = useSafeAreaInsets();
  const getTime = t => t.match(/\d\d:\d\d/g)[0];

  return (
    <EventDetailsContextProvider initEvent={route.params}>
      <EventDetailsContext.Consumer>
        {({
          event: {
            name,
            croppedImage,
            content,
            place,
            eventDate,
            startTime,
            endTime,
            volunteersSigned,
            volunteersNeeded,
            signedUp,
            meetingPlace,
            taskToDo,
            additionalInformation
          },
          handleSignUp,
          handleSignOff
        }) => (
          <EventDetailsWrapper insets={insets}>
            <EventCardImage details source={{uri: croppedImage}}>
              <ReturnButton icon="arrow-left" onPress={() => goBack()} />
              {signedUp && <StatusLabel />}
            </EventCardImage>
            <EventCardBody>
              <EventName variant="h2" color="primary">
                {name}
              </EventName>
              <Text>{content}</Text>
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
              <AdditionalInfo title="Miejsce zbiorki" body={meetingPlace} />
              <AdditionalInfo title="Zadanie do wykonania" body={taskToDo} />
              <AdditionalInfo
                title="Dodatkowe informacje"
                body={additionalInformation}
              />
              <EventHours />
              <SignButton
                onPress={signedUp ? handleSignOff : handleSignUp}
                secondary={signedUp}>
                {signedUp ? 'Zrezygnuj' : 'Dołącz'}
              </SignButton>
            </EventCardBody>
          </EventDetailsWrapper>
        )}
      </EventDetailsContext.Consumer>
    </EventDetailsContextProvider>
  );
};

export default EventDetails;
