import React, {useRef, useState, useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';
import {ScrollView, View} from 'react-native';
import DismissKeyboard from 'components/DismissKeyboard.component';
import Button from 'components/Button.component';
import Text from 'components/Text.component';
import Checkbox from 'components/Checkbox.component';
import {
  RegisterContext,
  RegisterContextProvider
} from 'services/auth/Register.context';
import {SKILLS, EVENTS} from 'services/auth/Register.enum';
import FormInput from 'components/FormInput.component';
import {AlertContext} from 'services/utils/Alert.context';

const Scroll = styled(ScrollView)`
  background-color: ${({theme}) => theme.colors.secondary};
  padding-bottom: 10px;
`;

const Wrapper = styled(View)`
  align-items: flex-start;
  flex: 1;
  margin-top: ${({insets}) => insets.top + 40}px;
  padding: 5%;
`;

const ReturnButton = styled(Button)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Box = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  ${({checkbox, theme, error}) =>
    checkbox &&
    css`
      border-radius: 10px;
      border: 2px solid ${error ? theme.colors.primary : theme.colors.gray};
      background-color: ${theme.colors.white};
      padding: 15px;
      align-items: flex-start;
    `}
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 16px;
`;

const RegisterView = ({navigation: {goBack}}) => {
  const [data, setData] = useState({});
  const [events, setEvents] = useState({});
  const [skills, setSkills] = useState({});
  const [terms, setTerms] = useState({});
  const {showAlert} = useContext(AlertContext);

  const handleChange = (value, name) =>
    setData(prev => ({...prev, [name]: value}));

  const handleEventChange = name =>
    setEvents(prev => ({...prev, [name]: !prev[name]}));

  const handleSkillChange = name =>
    setSkills(prev => ({...prev, [name]: !prev[name]}));

  const handleTermsChange = name =>
    setTerms(prev => ({...prev, [name]: !prev[name]}));

  const alertRODO = () => showAlert('Treść RODO');
  const alertRules = () => showAlert('Treść Regulaminu');

  const insets = useSafeAreaInsets();
  const lastNameInput = useRef();
  const birthdayInput = useRef();
  const cityInput = useRef();
  const phoneNumberInput = useRef();
  const passwordInput = useRef();
  const password2Input = useRef();

  return (
    <RegisterContextProvider goBack={goBack}>
      <RegisterContext.Consumer>
        {({onRegister, errors}) => (
          <DismissKeyboard>
            <Scroll>
              <ReturnButton icon="arrow-left" onPress={() => goBack()} />
              <Wrapper insets={insets}>
                <Box>
                  <Text variant="h1">Hej Wolontariuszu!</Text>
                  <Text variant="body">
                    Miło Cię tu widzieć. Bycie wolontariuszem to poważna i
                    odpowiedzialna sprawa, ale przede wszystkim pomoc
                    potrzebującym, realizacja pasji i budowanie relacji z
                    innymi. Aby do nas dołączyć uzupełnij ankietę:
                  </Text>
                </Box>
                <Text style="label">Dane osobowe:</Text>
                <Box>
                  <FormInput
                    placeholder="Imię"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => lastNameInput.current.focus()}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'first_name')
                    }
                    error={errors?.first_name}
                  />
                  <FormInput
                    placeholder="Nazwisko"
                    ref={lastNameInput}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => birthdayInput.current.focus()}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'last_name')
                    }
                    error={errors?.last_name}
                  />
                  <FormInput
                    placeholder="Data Urodzenia - YYYY-MM-DD"
                    keyboardType="number-pad"
                    ref={birthdayInput}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => cityInput.current.focus()}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'birthday')
                    }
                    error={errors?.birthday}
                  />
                  <FormInput
                    placeholder="Miejscowość"
                    ref={cityInput}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => phoneNumberInput.current.focus()}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'town')
                    }
                    error={errors?.town}
                  />
                  <FormInput
                    placeholder="Numer telefonu"
                    textContentType="telephoneNumber"
                    maxLength={12}
                    keyboardType="phone-pad"
                    autoCompleteType="tel"
                    ref={phoneNumberInput}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'phone_number')
                    }
                    error={errors?.phone_number}
                  />
                </Box>
                <Text style="label">Dane logowania:</Text>
                <Box>
                  <FormInput
                    placeholder="Email"
                    keyboardType="email-address"
                    onSubmitEditing={() => passwordInput.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'email')
                    }
                    error={errors?.email}
                  />
                  <FormInput
                    placeholder="Hasło"
                    secureTextEntry={true}
                    ref={passwordInput}
                    onSubmitEditing={() => password2Input.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'password')
                    }
                    error={errors?.password}
                  />
                  <FormInput
                    placeholder="Powtórz hasło"
                    secureTextEntry={true}
                    ref={password2Input}
                    onChange={({nativeEvent}) =>
                      handleChange(nativeEvent.text, 'password2')
                    }
                    error={errors?.password2}
                  />
                </Box>
                <Text style="label">Jaki wolontariat Cię interesuje?</Text>
                <Box checkbox error={errors.events}>
                  {Object.keys(EVENTS).map(key => (
                    <StyledCheckbox
                      key={key}
                      label={EVENTS[key]}
                      onPress={() => handleEventChange(key)}
                      checked={events[key]}
                    />
                  ))}
                  {errors.events && <Text>{errors.events}</Text>}
                </Box>
                <Text style="label">Jakie masz umiejętności?</Text>
                <Box checkbox error={errors.skills}>
                  {Object.keys(SKILLS).map(key => (
                    <StyledCheckbox
                      key={key}
                      label={SKILLS[key]}
                      onPress={() => handleSkillChange(key)}
                      checked={skills[key]}
                    />
                  ))}
                  {errors.skills && <Text>{errors.skills}</Text>}
                </Box>
                <StyledCheckbox
                  label="Akceptuję RODO*"
                  labelVariant="link"
                  labelColor="primary"
                  onLabelPress={alertRODO}
                  onPress={() => handleTermsChange('rodo')}
                  checked={terms.rodo}
                />
                <StyledCheckbox
                  label="Akceptuję regulamin wolonatariatu*"
                  labelVariant="link"
                  labelColor="primary"
                  onLabelPress={alertRules}
                  onPress={() => handleTermsChange('rules')}
                  checked={terms.rules}
                />
                <Box>
                  <Button
                    onPress={() => {
                      terms.rules && terms.rodo
                        ? onRegister({data, events, skills})
                        : showAlert(
                            `Rejestracja wymaga akceptacji regulaminu oraz udzielenia zgody RODO`
                          );
                    }}
                    primary>
                    Zapisz się
                  </Button>
                </Box>
              </Wrapper>
            </Scroll>
          </DismissKeyboard>
        )}
      </RegisterContext.Consumer>
    </RegisterContextProvider>
  );
};

export default RegisterView;
