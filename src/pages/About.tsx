import React from "react";
import Pic from "../assets/images/pic1.jpg"
const About = () => {
  return (
    <section className="flex flex-col w-full max-w-7xl min-h-screen px-5">
      <div className="flex w-full flex-col p-2 mb-4">
        <span className="flex w-full mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
        <h4 className="p-0 m-0 text-persianGreen text-xl font-semibold ">Lorem ipsum dolor sit amet, consectetur.</h4>

        </span>
        <div className="flex w-full justify-center flex-wrap lg:flex-nowrap">

        <p className="flex px-2 text-justify mb-6 lg:mb-0">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={Pic} className="rounded-xl max-w-xl min-w-[300px] ml-6"/>
        </div>
      </div>
      <div className="flex w-full flex-col p-2">
        <span className="flex w-full mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
        <h4 className="p-0 m-0 text-persianGreen text-xl font-semibold ">Lorem ipsum dolor sit amet, consectetur.</h4>

        </span>
        <div className="flex w-full justify-center flex-wrap lg:flex-nowrap">

        <p className="flex px-2 text-justify mb-6 lg:mb-0">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={Pic} className="rounded-xl max-w-xl min-w-[300px] ml-6"/>
        </div>
      </div>
    </section>
  );
};

export default About;