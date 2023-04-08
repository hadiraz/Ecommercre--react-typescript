import React, { CSSProperties, useEffect, useState } from "react";
import { getProducts } from "../api/fakeStoreAPI";
import { ProductType } from "../types/product";
import { ClipLoader, HashLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ADD_NEW_PRODUCT } from "../redux/reducers/cartReducer";
import { Link } from "react-router-dom";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const BasedOnUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const productDispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.cart);
  
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts<ProductType[]>("products", 10);
      data.length && setLoading(false);
      data.length && setProducts(data);
      !data.length && setError("something went wrong!");
      !data.length && setLoading(false);
    };
    getData();
  }, []);
  
  return (
    <section
      className={`${
        loading
          ? "flex items-center justify-center"
          : error
          ? "flex items-center justify-center"
          : "grid grid-cols-5 grid-rows-2 bg-greenShadow-100 gap-[2px]"
      } w-full my-10`}
    >
      {loading ? (
        <HashLoader
          color="#FF85A1"
          loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
        />
      ) : error ? (
        error
      ) : (
        products.map((value, key) => {
          return (
            <Link to={`product/${value.id}`}
              className={`flex items-center justify-center w-full h-full bg-white`}
              key={key}
            >
              <img
                className="flex item-center justify-center max-w-[10rem] max-h-[10rem] w-full h-full p-3"
                src={value.image}
              />
            </Link>
          );
        })
      )}
    </section>
  );
};

export default BasedOnUser;
