import React, {useState, createContext} from 'react';

export const AlertContext = createContext();

export const AlertContextProvider = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState({});

  const showAlert = text => {
    setMessage(text);
    setIsVisible(true);
  };

  return (
    <AlertContext.Provider
      value={{isVisible, setIsVisible, message, showAlert}}>
      {children}
    </AlertContext.Provider>
  );
};
