import React from 'react';
import styled from 'styled-components/native';
import {
  TouchableOpacity,
  Platform,
  Linking,
  Image,
  Dimensions
} from 'react-native';

const CardWrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 45%;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  margin: 2.5%;
  height: ${parseInt(Dimensions.get('window').width * 0.45, 10)}px;
  /* Specify shadow depending on OS (might not work on older Android)*/
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);'
    : 'elevation: 5;'}
`;

const Icon = styled(Image).attrs(() => ({resizeMode: 'contain'}))`
  width: 95%;
  height: 95%;
`;

const DonationCard = ({url, icon, ...props}) => (
  <CardWrapper onPress={() => Linking.openURL(url)} {...props}>
    <Icon source={icon} />
  </CardWrapper>
);
export default DonationCard;
