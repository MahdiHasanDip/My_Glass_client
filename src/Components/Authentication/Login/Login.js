import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import { Col,  Row } from 'react-bootstrap';

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
    <div className="Login"> 
        <div className="container login-form">
            <>
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="login-sec"> 
                            <h3> Login Here</h3>    
                            <hr />                     
                                <form className='Form' onClick={handleLoginBtn}>
                                        <input onBlur={handleEmail} type="email"  placeholder='Email'  />
                                        <br /> <br />
                                        <input onBlur={handlePassword} type="password" placeholder='Password' />
                                        <br /> <br />
                                        <input id="submit" type="submit" value="Submit" />
                                    </form>
                                    <br />                                    
                                <button className='google-login' onClick={googleLoginBtn}>
                                    Login with Google
                                </button>
                                <br /><br /><br />                              
                        </div>
                    </Col>

                    <Col xs={12} lg={6} className="Reg-section">
                        <div >
                            <h1>Welcome to login</h1>
                            <h4>Do you need an account?</h4>
                            <Link to="/registration" ><button className='link-btn'>Sign Up</button></Link>
                        </div>
                    </Col>
                </Row>
            </>
        </div>                              
    </div>
    );
};

export default Login;