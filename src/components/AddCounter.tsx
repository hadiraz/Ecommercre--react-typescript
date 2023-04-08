import React, { useEffect, useState } from "react";
import { ItemType } from "../redux/store";
import {
  ADD_PRODUCT,
  DECREASE_ITEM,
  REMOVE_ITEM,
} from "../redux/reducers/cartReducer";
import { useAppDispatch } from "../hooks/reduxHooks";
import { ProductType } from "../types/product";
import { BeatLoader } from "react-spinners";
type AddCounterType = {
  productCartData: ItemType , 
  activeButtons : boolean ,
  className ?: string
};
const AddCounter = ({ productCartData,  activeButtons , className }: AddCounterType) => {
  useEffect(()=>{
    console.log(productCartData , "jjjjj")
  },[productCartData.count])
  const dispatch = useAppDispatch();
  const handleAdd = (value: ProductType) => {
    dispatch(
      ADD_PRODUCT({
        ...value,
        count: 1,
      })
    );
  };
  const handleDecrease = (value: ProductType) => {
    dispatch(
      DECREASE_ITEM({
        ...value,
        count: 1,
      })
    );
  };
  const handleRemove = (value: ProductType) => {
    dispatch(
      REMOVE_ITEM({
        ...value,
        count: 1,
      })
    );
  };
  return (
    <div className={`flex justify-center items-center mx-3 ${className}`}>
      {productCartData ? (
        <>
          {productCartData.count > 0 && activeButtons && (
            <span
              className={`select-none shadow-md rounded-md w-7 h-7 flex justify-center items-center font-base text-xl cursor-pointer `}
              onClick={() => handleRemove(productCartData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="red"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </span>
          )}
          {productCartData.count > 1 && activeButtons && (
            <span
              className={`select-none shadow-md rounded-md w-7 h-7 flex justify-center items-center font-base text-xl cursor-pointer ml-3`}
            >
              <span
                className="flex w-full h-full justify-center items-center font-bold"
                onClick={() => handleDecrease(productCartData)}
              >
                -
              </span>
            </span>
          )}
          <span className="flex justify-center items-center select-none mx-3 w-5">
            {productCartData.count}
          </span>
          {
            activeButtons && (<span
            className="select-none shadow-md rounded-md w-7 h-7 flex justify-center items-center text-brightGreen font-base text-xl cursor-pointer p-3 font-bold"
            onClick={() => handleAdd(productCartData)}
          >
            +
          </span>)
          }
          
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default AddCounter;
