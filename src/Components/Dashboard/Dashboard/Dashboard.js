import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link ,
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
                        
                        {/* Drawer  */}
                        <ul className="dashboard-list">
                            <li>
                             <Link style={{paddingLeft: 13, textDecoration: 'none', color: " black"}} to={`${url}`} className="Link">Home</Link>
                         </li> <hr/>
                        <li>
                            <Link style={{paddingLeft: 13, textDecoration: 'none', color: " black"}} to={`${url}/Payment`}  className="Link">Payment</Link>
                         </li> <hr/>
                        <li>
                            <Link style={{paddingLeft: 13, textDecoration: 'none', color: " black"}} to={`${url}/Order`}  className="Link">My Order</Link>
                         </li> <hr/>
                        {
                            admin
                            && 
                            <span>
                            <li>
                            <Link style={{paddingLeft: 13, textDecoration: 'none', color: " black"}} to={`${url}/manageOrder`}  className="Link">Manage Orders</Link>
                         </li> <hr/>
                        <li><Link style={{paddingLeft: 13, textDecoration: 'none', color: " black"}} to={`${url}/AddProduct`}  className="Link">Add A Product</Link>
                         </li> <hr/>  
                        <li>
                            <Link style={{paddingLeft: 13, textDecoration: 'none', color: "black"}}  to={`${url}/manageProduct`}
                            className="Link">Manage Product</Link>
                         </li> <hr/>
                        <li>
                            <Link style={{paddingLeft: 13, textDecoration: 'none', color: " black"}} to={`${url}/MakeAdmin`}
                            className="Link">Make Admin</Link>
                         </li> <hr/>

                            </span>
                        }
                        <br />
                        <br />
                        <br />
                        <br />
                        <p> Loged as : {user.email}</p>
                        {admin&& <p>Admin</p>}
                        <hr/>
                         <li><button className="btn btn-outline-danger
                         " onClick={handleLogout}>logout</button> </li> 
                        <br />
                  
                         </ul>
                     </div>

                    {/* Dashbord window  */}
                    <div class="col col-sm-12 col-lg-9 main-container">
                    <Switch>
                        <Route exact path={path}>
                        <div > 
                            <h1>Dashboard Home</h1> <hr />
                            <img className='welcome img-fluid mt-5' src="https://i.ibb.co/g6VFT3d/TO-DASHBOARD.png" alt="" />
                        </div>
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

