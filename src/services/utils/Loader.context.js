import React, {useState, createContext} from 'react';

export const LoaderContext = createContext();

export const LoaderContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{loading, setLoading}}>
      {children}
    </LoaderContext.Provider>
  );
};
