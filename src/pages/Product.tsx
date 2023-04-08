import React, { useEffect, useState } from "react";
import { getProduct } from "../api/fakeStoreAPI";
import { useParams } from "react-router-dom";
import { ProductType } from "../types/product";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ADD_NEW_PRODUCT, selectCart } from "../redux/reducers/cartReducer";
import AddCounter from "../components/AddCounter";
import { ItemType } from "../redux/store";

const Product = ({ data }: { data?: ProductType }) => {
  const { productId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [product, setProduct] = useState<ProductType>();
  const [productCartValue, setProductCartValue] = useState<ItemType>();
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const addHandler = () => {
    if (product) {
      dispatch(
        product &&
          ADD_NEW_PRODUCT({
            ...product,
            count: 1,
          })
      );
    }
  };
  useEffect(() => {
    if (data?.id) {
      setProduct(data);
    } else {
      (async () => {
        const send = await getProduct<ProductType>(`products/${productId}`);
        console.log(send);
        send.id && setProduct(send);
        send.id && setLoading(false);
        !send.id && setError("something went wrong");
      })();
    }
  }, []);
  useEffect(() => {
    const cartInItem = cart.items.find((value) => value.id === product?.id);
    setProductCartValue(cartInItem);
  }, [cart.items , product]);
  return (
    <section className="flex min-h-screen max-w-7xl">
      {loading ? (
        ""
      ) : error ? (
        error
      ) : (
        <section className="flex flex-col w-full items-center px-3 pt-3">
          <section className="flex flex-col items-center md:items-start md:flex-row justify-between w-full">
            <div className="flex justify-center items-center w-full md:w-1/3 p-3 rounded-xl shadow-lg md:mr-20 min-w-[15rem] min-h-[15rem] max-w-[25rem] md:max-w-[15rem]">
              <img
                src={product?.image}
                className="flex items-center justify-center w-full "
              />
            </div>
            <div className="flex flex-col items-center md:items-start w-full md:w-2/3 mt-10 md:mt-0 rounded-xl shadow-lg md:shadow-none p-3">
              <h3 className="font-bold text-lg">{product?.title}</h3>
              <p className="font-light text-xs px-3 py-1 rounded-xl bg-yellow flex w-fit mt-2">
                {product?.category}
              </p>
              <div className="flex w-full items-center mt-10 justify-center md:justify-start">
                <span className="flex font-bold">${product?.price}</span>
                {productCartValue?.id ? (
                  <AddCounter productCartData={productCartValue} activeButtons={true}/>
                ) : (
                  <div
                    onClick={addHandler}
                    className="flex px-3 py-2 rounded-xl bg-persianGreen ml-10 text-white font-semibold cursor-pointer hover:bg-[#00bcc2] transition duration-150"
                  >
                    Add to cart
                  </div>
                )}
              </div>
            </div>
          </section>
          <article className="flex mt-10 text-justify">{product?.description}</article>
        </section>
      )}
    </section>
  );
};

export default Product;
