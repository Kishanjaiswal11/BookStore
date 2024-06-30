// ValueContext.js
import React, { createContext, useContext, useState } from 'react';

const ValueContext = createContext();

export default function ValueProvider({ children }) {
  const [value, setValue] = useState('');

  const updateValue = (newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <ValueContext.Provider value={[ value, updateValue ]}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => useContext(ValueContext);
