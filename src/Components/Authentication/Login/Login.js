import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const Login = () => {
    const history = useHistory();
        const location = useLocation();
        const redirect = location.state?.from || "/home";

    const {
        handleGoogleSignIn,
        user,
        handleLogin,
        handleLogout,
    } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
  

   // getting  email,password
    const handleEmail = (e) => {
      setEmail(e.target.value);
    //   console.log(email,password);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    //   console.log(password)
    };
    const handleLoginBtn = (e) => {
        handleLogin(email, password,location,history)
        
        
        e.preventDefault();
        console.log(email, password);
      };
    const googleLoginBtn = () =>{
        handleGoogleSignIn(location,history)
 
    };

   

    return (
        <div className="login">
            <div className="login-form">
            {
                user.email&&<button onClick={handleLogout}>logout</button>
                
            }
            <form onSubmit={handleLoginBtn}>
                <h1>Login</h1>
                <input onChange={handleEmail} type="email" /> <br />
                <input onChange={ handlePassword } type="password" /> <br />
                <input  type="submit" value="Submit" />
            </form>
            <span>.....................................................</span>
            <NavLink to="/registration">
                <p>New here? Register here...</p>
            </NavLink>
            <p>Or</p>
            <button onClick={googleLoginBtn}>Sign up with Google</button>
            </div>
        </div>
    );
};

export default Login;