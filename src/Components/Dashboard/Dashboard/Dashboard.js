import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink ,
    useRouteMatch
  } from "react-router-dom"
import AdminRoute from '../../AdminRoute/AdminRoute';
import useFirebase from '../../Hooks/useFirebase';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrders/MyOrder';
import Payment from '../Payment/Payment';
import './Dashboard.css'
const Dashboard = () => {
    const {path, url} = useRouteMatch();

    const {user,handleLogout,admin}= useFirebase();
    return (
        <div>
            <div class="">
                <div class="row">
                    <div class="col col-sm-12 col-lg-3 drawer">
                        <h1>Dashboard</h1>
                        <hr />
                        <p>{user.email}</p>
                        {/* Drawer  */}
                        <ul className="dashboard-list">
                            <li>
                             <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}`} className="Link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}/Payment`}  className="Link">Payment</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}/Order`}  className="Link">My Order</NavLink>
                        </li>
                        {
                            admin
                            && 
                            <span>
                            <li>
                            <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}/manageOrder`}  className="Link">Manage Orders</NavLink>
                        </li>
                        <li><NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}/AddProduct`}  className="Link">Add A Product</NavLink>
                        </li>  
                        <li>
                            <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}/manageProduct`}
                            className="Link">Manage Product</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{fontWeight: "bold", color: "black" ,textDecoration:"none" }} to={`${url}/MakeAdmin`}
                            className="Link">Make Admin</NavLink>
                        </li>

                            </span>
                        }
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                         <li><button className="btn btn-outline-danger" onClick={handleLogout}>logout</button></li>
                  
                         </ul>
                     </div>

                    {/* Dashbord window  */}
                    <div class="col col-sm-12 col-lg-9 main-container">
                    <Switch>
                        <Route exact path={path}>
                        <h3>Welcome to Dashboard</h3>
                        </Route>
                        <AdminRoute path={`${path}/AddProduct`}>
                        <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                        </AdminRoute>
                        <Route path={`${path}/Order`}>
                        <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/Payment`}>
                        <Payment></Payment>
                        </Route>
                        <AdminRoute path={`${path}/MakeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>





                    </div>
                    
                </div>
             </div>

        </div>
    );
};

export default Dashboard;

