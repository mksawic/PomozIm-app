import React from 'react';
import {Platform, Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from 'components/Button.component';

const ReturnButton = styled(Button)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
`;

const EventDatePicker = ({setDate, setShowDate, ...props}) => {
  return Platform.OS === 'ios' ? (
    <>
      <ReturnButton icon="arrow-left" onPress={() => setShowDate(false)} />
      <DateTimePicker {...props} {...iosProps(setDate)} />
    </>
  ) : (
    <DateTimePicker {...props} {...androidProps(setDate, setShowDate)} />
  );
};

const androidProps = (setDate, setShowDate) => ({
  onChange: (e, date) => {
    setShowDate(false);
    return e.type === 'set' && setDate(date);
  }
});

const iosProps = setDate => ({
  style: styles.ios,
  display: 'spinner',
  onChange: (_, date) => setDate(date)
});

const styles = StyleSheet.create({
  ios: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: Dimensions.get('window').width + 10,
    height: Dimensions.get('window').height + 10,
    backgroundColor: '#ffffff'
  }
});

export default EventDatePicker;
