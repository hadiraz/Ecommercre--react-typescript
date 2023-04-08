import React from "react";
import Banner from "../assets/images/home-locPhone.jpg";
const HomeBanner = () => {
  return (
    <section className="flex relative items-center justify-center rounded-2xl overflow-hidden w-full max-h-[30rem] my-5 max-w-7xl mx-auto">
      <img
        src={Banner}
        className="flex justify-center items-center overflow-hidden bg-contain bg-center w-full max-h-full"
      />
      <span className="hidden md:flex h-full absolute top-0 left-6 text-4xl lg xl:text-7xl">
        <p className="absolute top-1/3 text-persianGreen font-bold capitalize">
          order
        </p>
        <p className="absolute top-1/2 text-persianGreen font-bold capitalize">
          everywhere
        </p>
      </span>
    </section>
  );
};

export default HomeBanner;
