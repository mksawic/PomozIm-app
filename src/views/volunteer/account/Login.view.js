import React, {useRef, useState, useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {View, Image} from 'react-native';
import DismissKeyboard from 'components/DismissKeyboard.component';
import Button from 'components/Button.component';
import Text from 'components/Text.component';
import {AuthContext} from 'services/auth/Login.context';
import FormInput from 'components/FormInput.component';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${({insets}) => insets.top}px;
  padding: 24px;
  background-color: ${({theme}) => theme.colors.secondary};
`;
const LoginButton = styled(Button)`
  margin-top: 24px;
  width: 100%;
`;
const RegisterButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
`;
const Banner = styled(Image).attrs(() => ({resizeMode: 'contain'}))`
  width: 100%;
  height: 140px;
`;

const LoginView = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const passwordInput = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {onLogin, errors} = useContext(AuthContext);
  return (
    <DismissKeyboard>
      <Wrapper insets={insets}>
        <Banner source={require('../../../assets/banner.png')} />

        <FormInput
          placeholder="Email"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordInput.current.focus()}
          blurOnSubmit={false}
          onChangeText={e => setEmail(e)}
          value={email}
          error={errors?.email}
        />
        <FormInput
          placeholder="Hasło"
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry={true}
          ref={passwordInput}
          onChangeText={p => setPassword(p)}
          value={password}
          error={errors?.password}
        />
        {errors?.detail && <Text color="primary">{errors?.detail}</Text>}
        <LoginButton primary onPress={() => onLogin({email, password})}>
          Zaloguj się
        </LoginButton>
        <RegisterButton
          secondary
          onPress={() => navigation.navigate('Register')}>
          Chcę zostać wolontariuszem
        </RegisterButton>
      </Wrapper>
    </DismissKeyboard>
  );
};

export default LoginView;
