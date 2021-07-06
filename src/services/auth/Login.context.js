import React, {useState, createContext, useEffect, useContext} from 'react';
import {loginRequest, refreshRequest} from './Login.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoaderContext} from 'services/utils/Loader.context';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const {setLoading} = useContext(LoaderContext);

  useEffect(() => {
    const getUser = async () => {
      const storedUser = JSON.parse(await AsyncStorage.getItem('user'));
      storedUser?.refresh
        ? refreshRequest(storedUser.refresh).then(
            res => res.status === 200 && setUser(res.body)
          )
        : setUser(storedUser);
    };
    getUser();
  }, []);

  const onLogin = credentials => {
    setLoading(true);
    loginRequest(credentials)
      .then(async response => {
        if (response.status === 200) {
          setErrors(null);
          setUser(response.body);
          await AsyncStorage.setItem('user', JSON.stringify(response.body));
        } else {
          setErrors(response.body);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  const onLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{user, errors, onLogin, onLogout}}>
      {children}
    </AuthContext.Provider>
  );
};
