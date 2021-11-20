import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound"
import Header from "./Components/Sheared/Header/Header";
import Footer from "./Components/Sheared/Footer/Footer";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import Payment from "./Components/Dashboard/Payment/Payment";
import ManageProduct from "./Components/Dashboard/ManageProduct/ManageProduct";
import AllProduct from "./Components/Dashboard/AllProduct/AllProduct";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";
import AuthProvider from "./Components/Context/AuthProvider";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrder from "./Components/Dashboard/MyOrders/MyOrder";
import ManageOrder from "./Components/Dashboard/ManageOrder/ManageOrder";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AdminRoute from "./Components/AdminRoute/AdminRoute";

function App() {
  return <div className="App">
    <AuthProvider>
      <Router>
        <Header/>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <AdminRoute path="/AddProduct">
              <AddProduct></AddProduct>
            </AdminRoute>
            <Route path="/allProduct">
              <AllProduct></AllProduct>
            </Route>
            <PrivateRoute path="/Payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/Order">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <AdminRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </AdminRoute>
            <AdminRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
            </AdminRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  </div>;
}

export default App;
