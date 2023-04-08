import React, { useEffect, useState } from "react";
import { ProductType } from "../types/product";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ADD_NEW_PRODUCT, ADD_PRODUCT, selectCart } from "../redux/reducers/cartReducer";
import { Link } from "react-router-dom";
import AddCounter from "./AddCounter";
import { ItemType } from "../redux/store";

const CarouselItem = ({ data }: { data: ProductType }) => {
  const { id } = data;
  const [productCartData , setProductCartData] = useState<ItemType>() 
  const productDispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  useEffect(()=>{
    let item = cart.items.find(value => value.id === id);
    setProductCartData(item)
  },[cart.items , data]);

  const addProductHandler = () => {
    let checkItemIn = false;
    cart.items.map((value) => {
      if (value.id === id) checkItemIn = true;
    });
    checkItemIn
      ? productDispatch(
          ADD_PRODUCT({
            ...data ,
            count : 1
          })
        )
      : productDispatch(
          ADD_NEW_PRODUCT({
            ...data ,
            count : 1
          })
        );
  };

  return (
    <div className="flex flex-col h-60 mx-2 rounded-xl bg-white overflow-hidden items-center p-2 relative select-none">
      <img
        src={data.image}
        className="flex w-24 h-24 lg:w-32 lg:h-32 mb-6 mt-3 select-none"
      />
      <div className="mt-2 flex justify-between items-center w-full">
        <p className="text-xs md:text-sm lg:text-base font-medium h-full w-full break-words truncate">
          <Link to={`/product/${data.id}`}>
          {data.title}
          </Link>
        </p>
        <span className="text-xs md:text-sm lg:text-base font-medium ml-3 flex justify-center items-center">
          ${data.price}
        </span>
      </div>
      <div className={`flex absolute right-10 ${productCartData && productCartData.count > 0 && "!right-3 "} bottom-5 lg:bottom-20 group z-10 `}>
        {productCartData && productCartData.count && <AddCounter className={`flex lg:!hidden group-hover:!flex bg-white p-1 rounded-md z-20 `} activeButtons={true}  productCartData={productCartData}/>
        }
        <button
          onClick={addProductHandler}
          className={`!flex !cursor-pointer ${productCartData?.count ? "!hidden lg:!flex group-hover:!hidden text-xl !bg-brightGreen text-white" : ""} items-center justify-center bg-white border-2 border-brightGreen rounded-full font-medium text-3xl w-8 h-8 lg:w-10 lg:h-10 text-brightGreen`}
        >
          {
            productCartData && productCartData.count > 0 ? productCartData.count : "+"
          }
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
