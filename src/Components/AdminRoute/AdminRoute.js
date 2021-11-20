import React from 'react';
import {
    BrowserRouter as Router,  
    Route,   
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

  import useAuth from '../Hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,admin,isLoading} = useAuth();
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
        user.email && admin ? children : <Redirect
        to={{
            pathname: "/",
            state: {from: location},
        }}
        
        />}

        />
    );
};

export default AdminRoute;