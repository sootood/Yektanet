import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native'
import ContextProvider from './src/context/ContextProvider';
import Main from './src/Main';


const App = () => {
  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  );
};

export default App;
