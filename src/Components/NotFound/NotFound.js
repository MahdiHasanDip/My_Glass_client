import React from 'react';
import './NotFound.css'
import img from "../../image/3747371.jpg"
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="">
                
             {/* Not Found  */}
             <img src={img}  />
             <div className="notfoundText">  
            <div className="">
            <h1>Sorry....Page Not Found</h1>
             <Link to ="/"><button className="login-btn">Back To Home</button></Link>
            </div>
             </div>
            </div>
        </div>
    );
};

export default NotFound;