import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const {user,handleLogout}= useFirebase();
    return (
        <div className="header">
                      
            <div className="row">

                <div className="col-sm col-lg-2">
                    <h1 >My <span className='text-danger'>Glass</span> </h1>
                 </div>

                <div className="col-sm col-lg-6">

                <ul className='Nav-link'>
                
                    <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/" className="Link">Home</NavLink></li>

                    <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/allProduct" className="Link">All product</NavLink></li>


                    <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/dashboard" className="Link">Dashboard</NavLink></li>
                
                
                </ul>




                </div>

                <div className="col-sm col-lg-4">
                   
                {user.email
                           ?
                            <span>
                                <button className={"btn btn-outline-danger"} onClick={handleLogout}>logout</button>
                                <p>Welcome: {user.email}</p>
                                
                            </span>
                            :
                             <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/login" className="Link">Login</NavLink>
                            }



                   
                </div>

            </div>
        </div>
     );
};







    

export default Header;



{/* <ul className='Nav-link'>
                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/" className="Link">Home</NavLink></li>

                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/allProduct" className="Link">All product</NavLink></li>

                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/Payment" className="Link">Payment</NavLink></li>

                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/Order" className="Link">My Order</NavLink></li>

                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="//manageOrder" className="Link">Manage Orders</NavLink></li>

                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/AddProduct" className="Link">AddProduct</NavLink></li>

                            <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/manageProduct" className="Link">MProduct</NavLink></li>
                            
                            {user.email
                                ?
                                <span>
                                    <p>Welcome: {user.email}</p>
                                    <li><button onClick={handleLogout}>logout</button></li>
                                </span>
                                :
                                    <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to="/login" className="Link">Login</NavLink></li>
                            }
                        </ul> */}