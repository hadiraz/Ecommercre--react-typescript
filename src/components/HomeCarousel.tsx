import React, { CSSProperties, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getProducts } from "../api/fakeStoreAPI";
import CarouselItem from "./CarouselItem";
import { ProductType } from "../types/product";
import PreLoadingItem from "./PreLoadingItem";
import { HashLoader } from "react-spinners";

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      style={{
        display: "flex",
        opacity: 0.1,
        justifyContent: "center",
        alignItems: "center",
        background: "#ccc",
        position: "absolute",
        right: "10px",
        width: "40px",
        height: "40px",
        borderRadius: "2rem",
        fontSize: "0.9rem",
        transition: "0.3s",
      }}
      className="hover:opacity-100 important cursor-pointer"
      onClick={() => onClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-6 h-6 relative left-[2px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      style={{
        display: "flex",
        opacity: 0.1,
        justifyContent: "center",
        alignItems: "center",
        background: "#ccc",
        position: "absolute",
        left: "10px",
        width: "40px",
        height: "40px",
        borderRadius: "2rem",
        fontSize: "0.9rem",
        transition: "0.3s",
      }}
      className="hover:opacity-100 important cursor-pointer"
      onClick={() => onClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-6 h-6 relative right-[2px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const HomeCarousel = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  useEffect(() => {
    if (!products.length) {
      (async () => {
        const data = await getProducts<ProductType[]>("products", 10);
        data.length && setProducts(data);
        data.length && setLoading(false);
        !data.length && setError("something went wrong");
        !data.length && setLoading(false);
      })();
    }
  }, [products]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      {error ? (
        error
      ) : (
        <Carousel
          className={`py-3 h-64 bg-persianGreen ${
            !products.length ? "flex justify-center items-center" : ""
          } rounded-2xl w-full`}
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {loading ? (
            <HashLoader
              color="#ffffff"
              cssOverride={override}
              size={60}
              aria-label="Loading Spinner"
            />
          ) : (
            products.map((value, key) => {
              return <CarouselItem key={value.id} data={value} />;
            })
          )}
        </Carousel>
      )}
    </>
  );
};

export default HomeCarousel;
