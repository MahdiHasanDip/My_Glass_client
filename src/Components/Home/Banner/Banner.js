import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="Banner-container">
            <div className="container ">
                <div className="banner-title">
                <div className=""><h1>Welcome To <span className="text-danger"> My Glass</span></h1></div>
                </div>
                
               <Link to="/allProduct"> 
               <button className="banner-btn"> Explore more</button>
               </Link>
            </div>
        </div>
    );
};

export default Banner;