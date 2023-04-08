import React from "react";
import { Menu } from "./MainNav";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectProfile } from "../redux/reducers/profileReducer";

const HamburgerNav = ({ hamMenu }: Menu) => {
  const { menuStatus, setMenuStatus } = hamMenu;
  const profile = useAppSelector(selectProfile);
  return (
    <div className="flex overscroll-none h-screen">
      <div
        className={`top-0 right-0 absolute w-screen h-screen bg-white ${
          menuStatus ? "flex" : "hidden"
        } opacity-70 z-[99]`}
        onClick={() => setMenuStatus(false)}
      ></div>
      <section
        className={`flex flex-col absolute overscroll-none w-[55vw] h-screen bg-persianGreen top-0 transition-all duration-300  ${
          menuStatus && "!right-[0]"
        } -right-full z-[100] py-4 px-1 rounded-l-xl`}
      >
        <span
          className="flex text-white cursor-pointer"
          onClick={() => setMenuStatus(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <nav className="flex w-full mt-5 text-white font-bold">
          <ul className="flex flex-col justify-center w-full px-1">
            <li className="mt-3 cursor-pointer flex items-center hover:bg-lightGray hover:text-[black] rounded-xl p-2 text-sm w-full">
              <Link
                className="flex items-center w-full h-full"
                to="/"
                onClick={() => setMenuStatus(false)}
              >
                <span className="flex justify-center items-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li className="mt-3 cursor-pointer flex items-center hover:bg-lightGray hover:text-[black] rounded-xl p-2 text-sm w-full">
              <Link
                className="flex items-center w-full h-full"
                to={`/${profile.userName ? "profile" : "login"}`}
                onClick={() => setMenuStatus(false)}
              >
                <span className="flex justify-center items-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>{profile.userName ? "Profile" : "Login/Sign In"}</span>
              </Link>
            </li>
            <li className="mt-3 cursor-pointer flex items-center hover:bg-lightGray hover:text-[black] rounded-xl p-2 text-sm w-full">
              <Link
                className="flex items-center w-full h-full"
                to="/about"
                onClick={() => setMenuStatus(false)}
              >
                <span className="flex justify-center items-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </span>
                <span>About Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default HamburgerNav;
