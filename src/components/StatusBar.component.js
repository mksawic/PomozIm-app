import React from 'react';
import {StatusBar as NativeStatusBar} from 'react-native';
import styled from 'styled-components';

const StatusBarWrapper = styled.SafeAreaView`
  background-color: ${({theme, backgroundColor}) =>
    theme.colors[backgroundColor]};
`;

const StatusBar = ({backgroundColor, ...props}) => (
  <StatusBarWrapper backgroundColor={backgroundColor}>
    <NativeStatusBar backgroundColor={backgroundColor} {...props} />
  </StatusBarWrapper>
);
export default StatusBar;
