import React, {useState} from 'react';
import AppContext from '.';

const ContextProvider = ({children}) => {
 
  const [catSelected, setCatSelected] = useState(null)
  const [filterSelected, setFilterSelected] = useState(null)
  const [sorting, setSorting] = useState(false)

  
  const context = {
 
    catSelected, setCatSelected,
    filterSelected, setFilterSelected,
    sorting, setSorting
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
