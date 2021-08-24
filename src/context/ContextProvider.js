import React, {useState} from 'react';
import AppContext from '.';

const ContextProvider = ({children}) => {
 
  const [catSelected, setCatSelected] = useState(null)
  const [filterSelected, setFilterSelected] = useState(null)

  
  const context = {
 
    catSelected, setCatSelected,
    filterSelected, setFilterSelected
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
