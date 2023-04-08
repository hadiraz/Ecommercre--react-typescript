import React, {
  ReactElement,
  ReactNode,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectCart } from "../redux/reducers/cartReducer";
import { selectProfile } from "../redux/reducers/profileReducer";

export type Menu = {
  hamMenu : {
    menuStatus: boolean;
    setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
  }
};

const MainNav = ({ hamMenu } : Menu) => {
  const {menuStatus , setMenuStatus} = hamMenu ;
  const cart = useAppSelector(selectCart);
  const profile = useAppSelector(selectProfile);

  return (
    <section className="flex justify-center items-center w-full h-14 bg-greenShadow-100 shadow-sm !sticky z-50 top-0 left-0 py-4 rounded-b-2xl mb-5 px-7 md:px-0 transition duration-150">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <nav className="hidden md:flex items-center font-medium w-3/4 overflow-hidden">
          <ul className="flex items-center text-sm cursor-pointer">
            <Link to={"/"}>
              <li className="flex items-center justify-center p-3 rounded-xl mx-1">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="flex items-center justify-center p-3 rounded-xl mx-1">
                About us
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex md:hidden items-center justify-center">
          <Link
            to={"/cart"}
            className="flex justify-center items-center p-3 cursor-pointer rounded-full hover:bg-lightGray relative"
          >
            <span className="flex rounded-full h-5 w-5 justify-center items-center bg-brightGreen absolute font-normal text-xs text-white truncate top-2 left-0">
              {cart.totalItems}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-row-reverse items-center w-1/4 max-h-full max-w-full">
          <Link to={"/"}>
          <img src={logo} className="flex max-w-full max-h-full w-28" />
          </Link>
          <div className="hidden md:flex items-center justify-center">
            <Link
              to={"/cart"}
              className="flex justify-center items-center p-3 cursor-pointer rounded-full hover:bg-lightGray relative"
            >
              <span className="flex rounded-full h-5 w-5 justify-center items-center bg-brightGreen absolute font-normal text-xs text-white truncate top-2 left-0">
                {cart.totalItems}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center mr-5 w-5 h-5 rounded-full hover:bg-lightGray">
            <Link
              to={`${profile.userName ? "/profile" : "/login"}`}
              className="flex justify-center items-center p-3 cursor-pointer rounded-full hover:bg-lightGray relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setMenuStatus(true)}
          className="flex md:hidden rounded-full h-10 w-10 items-center justify-center hover:bg-lightGray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
