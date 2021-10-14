import React, { createContext } from 'react';
import Usefirebase from '../component/Hook/Usefirebase';

// context create
  export const AuthContext = createContext();

const Authprovider = (props) => {
    const {children} = props;
    const allContext = Usefirebase();
    return (
       <AuthContext.Provider value={allContext}>

            {children}

       </AuthContext.Provider>
    );
};

export default Authprovider;