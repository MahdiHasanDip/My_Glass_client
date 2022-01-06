import React, { useState } from 'react';
import { Col,  Row } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';
import './Registration.css'

const Registration = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/home";
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
          handleRegister(email, password,location,history)
          e.preventDefault();
          console.log(email, password);  

  
        };
    return (
<div className="Login"> 
        <div className="container login-form">
            <>
                <Row>
                <Col xs={12} lg={6} className="Reg-section">
                        <div >
                            <h1>Welcome to Registration</h1>
                            <h4>Have an account?</h4>
                            <Link to="/login" ><button className='link-btn'>Sign In</button></Link>
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className="login-sec"> 
                            <h3> Register Here</h3>    
                            <hr />                     
                                <form className='Form' onClick={handleRegisterBtn}>
                                        <input onBlur={handleEmail} type="email"  placeholder='Email'  />
                                        <br /> <br />
                                        <input onBlur={handlePassword} type="password" placeholder='Password' />
                                        <br /> <br />
                                        <input id="submit" type="submit" value="Submit" />
                                    </form>
                                    <br />                                    
                                <button className='google-login' onClick={handleGoogleSignIn}>
                                    Login with Google
                                </button>
                                <br /><br /><br />                              
                        </div>
                    </Col>                   
                </Row>
            </>
        </div>                              
    </div>
    );
};

export default Registration;