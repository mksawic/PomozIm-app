import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = styled(DropDownPicker).attrs(({theme}) => ({
  containerStyle: {height: 48, width: '100%'},
  textStyle: {
    fontFamily: theme.fonts.body,
    color: theme.colors.textDark,
    fontSize: 16
  },
  placeholderStyle: {color: theme.colors.gray},
  arrowColor: theme.colors.textDark
}))`
  border: 2px solid ${({theme}) => theme.colors.textDark};
  background-color: ${({theme}) => theme.colors.white};
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);'
    : 'elevation: 5;'}
`;

const Dropdown = props => <DropDown {...props} />;

export default Dropdown;
