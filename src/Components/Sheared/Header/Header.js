import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const {user,handleLogout}= useFirebase();
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><h1 >My <span className='text-danger'>Glass</span> </h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/allProduct">Products</Nav.Link>
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      {user.email ?                       
            <button className={"btn btn-outline-danger"} onClick={handleLogout}>logout</button>                             
                  :
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
     
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>        
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