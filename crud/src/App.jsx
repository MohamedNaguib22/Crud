import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home";
import { SignUp } from "./components/Auth/SignUp";
import { Dashboard } from "./components/Dashboard";
// import { Users } from "./components/Users";
import FormUpDate from "./components/FormUpDate/FormUpDate";
import Users from "./components/Users/User";
import CreateUser from "./components/CreateUsers/CreateUser";
import ProtectRoute from "./components/Auth/ProtectRoute";
import Refresh from "./components/RefreshToken/Refresh";
import Product from "./components/Product/Product/Product";
import ProductUpDate from "./components/Product/ProductUpDate/ProductUpDate";
import CreateProduct from "./components/Product/CreateProduct/CreateProduct";
export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Refresh />}> 
          <Route element={<ProtectRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route exact path="users" element={<Users />} />
              <Route exact path="users/create" element={<CreateUser />} />
              <Route path="users/:id" element={<FormUpDate />} />
              <Route exact path="products" element={<Product />} />
              <Route exact path="products/:id" element={<ProductUpDate />} />
              <Route exact path="products/create" element={<CreateProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
