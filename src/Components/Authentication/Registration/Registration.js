import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Registration.css'

const Registration = () => {
    const {
        handleGoogleSignIn,        
        handleRegister   
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
      const handleRegisterBtn = (e) => {
          handleRegister(email, password)
          e.preventDefault();
          console.log(email, password);  

  
        };
    return (
        <div className="login">
            <div className="login-form">
            <form onSubmit={handleRegisterBtn}>
                <h1>Registration</h1>
                <input onChange={handleEmail} type="email" /> <br />
                <input onChange={ handlePassword } type="password" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <span>.....................................................</span>
            <NavLink to="/login">
                 <p>Already Register? Login here...</p>
            </NavLink>
            <p>Or</p>
            <button onClick={handleGoogleSignIn}>Sign up with Google</button>

         </div>
         </div>
    );
};

export default Registration;