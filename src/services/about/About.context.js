import React, {createContext} from 'react';
import {Platform} from 'react-native';
import {LINKS, MAPS} from './LINKS';

export const AboutContext = createContext();

export const AboutContextProvider = ({children}) => {
  const map = Platform.select({
    ios: MAPS.ios,
    android: MAPS.android
  });
  return (
    <AboutContext.Provider value={{...LINKS, map}}>
      {children}
    </AboutContext.Provider>
  );
};
