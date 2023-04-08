import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./pages/Cart";
import HamburgerNav from "./components/HamburgerNav";
import Product from "./pages/Product";
import P404 from "./pages/P404";
import Profile from "./pages/Profile";
import UserOrders from "./components/UserOrders";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

function App() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <div className="flex w-screen min-h-screen justify-center items-center font-montserrat relative overflow-x-hidden">
        <HamburgerNav hamMenu={{ menuStatus, setMenuStatus }} />
        <div
          className={`flex flex-col min-h-screen transition duration-150 w-screen items-center justify-between relative right-0 ${
            menuStatus ? "right-[100vw] overflow-hidden h-[50vh]" : ""
          } transition-all duration-300`}
        >
          {/* <div className={`flex flex-col transition duration-150 w-screen items-center ${menuStatus && "scale-x-50 scale-y-[0.3] z-[100] top-[-55vh] relative rounded-xl left-[-50vw]"}`}> */}
          <MainNav hamMenu={{ menuStatus, setMenuStatus }} />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/About" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signUp" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Product />} path="/product/:productId" />
            <Route
              element={<Profile />}
              path="/profile/:sectionPath?/:sectionParam?"
            />
            <Route element={<P404 />} path="*" />
          </Routes>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
