import React, {useState, createContext, useContext} from 'react';
import {registerRequest} from './Register.service';
import {FIELDS} from 'services/auth/Register.enum';
import {AlertContext} from 'services/utils/Alert.context';
import {LoaderContext} from 'services/utils/Loader.context';

export const RegisterContext = createContext();

export const RegisterContextProvider = ({children, goBack}) => {
  const [errors, setErrors] = useState({});
  const {showAlert} = useContext(AlertContext);
  const {setLoading} = useContext(LoaderContext);

  const onRegister = form => {
    setLoading(true);
    const {data} = form;
    const skills = Object.keys(form.skills)
      .map(s => Number(s))
      .filter(s => form.skills[s]);
    const events = Object.keys(form.events)
      .map(e => Number(e))
      .filter(e => form.events[e]);
    registerRequest({...data, skills, events})
      .then(res => {
        if (res.status === 201) {
          showAlert(
            `Rejestracja przebiegła pomyślnie!\n\nTeraz zaczekaj, aż członek Fundacji aktywuje twoje konto.\n\nDodatkowo możesz zatwierdzić swój email poprzez kliknięcie w link aktywacyjny wysłany na adres: ${data.email}.`
          );
          goBack();
        } else {
          setErrors(res.body);
          showAlert(
            `Należy poprawić następujące pola:
            ${Object.keys(res.body).map(
              field => FIELDS[field] && '\n' + FIELDS[field]
            )}`
          );
        }
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <RegisterContext.Provider value={{onRegister, errors}}>
      {children}
    </RegisterContext.Provider>
  );
};
