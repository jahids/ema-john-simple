import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../component/Hook/UseAuth';

const Privateroute = ({children, ...rest}) => {
    const {user} = UseAuth();
    return (
        <Route
            {...rest}
           render={({location}) => user.email? children:
        <Redirect
        to={{
            pathname:"/login",
            state: {from:location}
        }}


        >

        </Redirect>
        }
        >
        </Route>
    );
};

export default Privateroute;