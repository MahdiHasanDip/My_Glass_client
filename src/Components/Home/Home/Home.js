import React from 'react';
import Aboutus from '../AboutUs/Aboutus';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Products/>
            <Reviews></Reviews>
            <Aboutus></Aboutus>
        </div>

    );
};

export default Home;