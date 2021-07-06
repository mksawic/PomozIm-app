import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {AuthContext} from 'services/auth/Login.context';
import Button from 'components/Button.component';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${({insets}) => insets.top}px;
`;

const SettingsView = () => {
  const insets = useSafeAreaInsets();
  const {onLogout} = useContext(AuthContext);

  return (
    <Wrapper insets={insets}>
      <Button onPress={() => onLogout()}>Wyloguj</Button>
    </Wrapper>
  );
};

export default SettingsView;
