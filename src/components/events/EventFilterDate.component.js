import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text.component';
import {fullDate} from 'services/utils/Date.utils';

const DateWrapper = styled.TouchableOpacity`
  min-height: 48px;
  max-height: 48px;
  width: 100%;
  flex: 1;
  justify-content: center;
  padding-left: 12px;
  border: 2px solid ${({theme}) => theme.colors.textDark};
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.white};
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);'
    : 'elevation: 5;'}
`;

const DateLabelWrapper = styled.View`
  flex: 1;
`;

const EventFilterDate = ({date, label, onPress}) => (
  <DateLabelWrapper>
    <Text variant="small" color="textLight">
      {label}
    </Text>
    <DateWrapper onPress={onPress}>
      <Text>{fullDate(date)}</Text>
    </DateWrapper>
  </DateLabelWrapper>
);

export default EventFilterDate;
