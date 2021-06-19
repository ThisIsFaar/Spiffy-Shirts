import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";
import UpdateCategory from "./admin/UpdateCategory";
import ForgotPassword from "./user/ForgotPassword";
import Reset from "./user/Reset";
import UserProfile from "./user/UserProfile";
import MyOrders from "./user/MyOrders";
import Products from "./core/products";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/products" exact component={Products} />
        <Route path="/reset/:token" exact component={Reset} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <Route path="/user/forgot" exact component={ForgotPassword} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/products" exact component={ManageProduct} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />

        {/* User Routes */}
        <PrivateRoute path="/user/profile" exact component={UserProfile} />
        <PrivateRoute path="/user/myorders" exact component={MyOrders} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
