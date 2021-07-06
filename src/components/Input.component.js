import React, {forwardRef} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray,
  selectionColor: theme.colors.primary
}))`
  font-family: ${({theme}) => theme.fonts.body};
  font-size: ${({theme}) => theme.fontSizes.body};
  border: 2px solid ${({theme}) => theme.colors.textDark};
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  height: 48px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  color: ${({theme}) => theme.colors.textDark};
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);'
    : 'elevation: 5;'}
`;
const Input = forwardRef((props, ref) => <TextInput ref={ref} {...props} />);

export default Input;
