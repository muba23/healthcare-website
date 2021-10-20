import React from 'react';
import useAuth from './../../../hooks/useAuth';
import {Redirect,Route} from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <h4 className="mt-5">Please Wait....</h4>
    }
    return (
        <Route
        {...rest}
        render={({ location }) => user.email ? children :
              <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
              ></Redirect>
            }
        >   
        </Route>
    );
};

export default PrivateRoute;