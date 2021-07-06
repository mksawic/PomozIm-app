import React from 'react';
import {Platform, View, StyleSheet, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text.component';
import IconLabel from 'components/IconLabel.component';

export const EventCardWrapper = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;

  /* Specify shadow depending on OS (might not work on older Android)*/
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);'
    : 'elevation: 10;'}
`;

export const EventCardImage = styled(ImageBackground).attrs(({details}) => ({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 10,
    borderTopLeftRadius: details ? 0 : 10,
    borderTopRightRadius: details ? 0 : 10
  }
}))`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const EventCardBody = styled(View)`
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const EventInfoWrapper = styled(View)`
  margin-top: 24px;
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`;

export const EventName = styled(Text)`
  margin-bottom: 8px;
`;

export const EventIcon = ({name, center, children}) => (
  <IconLabel
    name={name}
    containerStyle={styles.eventIconStyle}
    textStyle={center ? styles.eventIconTextStyle : null}>
    {children}
  </IconLabel>
);

const styles = StyleSheet.create({
  eventIconStyle: {
    maxWidth: '30%'
  },
  eventIconTextStyle: {
    textAlign: 'center',
    flexWrap: 'nowrap'
  }
});
