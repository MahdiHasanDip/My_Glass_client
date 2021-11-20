import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

  import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    let history = useHistory();
    let location = useLocation();
    if(isLoading){
        return <div className="spinner-grow text-success"  role="status">
        <span className="sr-only"></span>
      </div>
    }

    return (
        <Route {...rest}
        render ={()=> 
        user.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: {from: location},
        }}
        
        />}

        />
    );
};

export default PrivateRoute;