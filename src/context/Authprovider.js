import React, { createContext } from 'react';

// context create
  export const AuthContext = createContext();

const Authprovider = (props) => {
    const {children} = props;
    return (
       <AuthContext.Provider>

            {children}

       </AuthContext.Provider>
    );
};

export default Authprovider;