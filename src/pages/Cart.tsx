import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { ProductType } from "../types/product";
import { Link } from "react-router-dom";
import AddCounter from "../components/AddCounter";
import OrderDetailTable from "../components/OrderDetailTable";
import { COMPLETE_ORDER } from "../redux/reducers/cartReducer";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()
  const [orderStatus , setOrderStatus] = useState(false);
  useEffect(()=>{
    if(orderStatus){
      dispatch(COMPLETE_ORDER());
    }
  },[orderStatus])
  return (
    <div className="flex flex-col w-full min-h-screen px-2 max-w-7xl">
      <section className="flex justify-start w-full min-h-full font-light px-3 overflow-x-auto">
        {cart.items.length && !orderStatus ? <OrderDetailTable cart={cart} activeButtons={true} /> : !orderStatus ? (
          <div className="flex w-full justify-center items-center">
            cart is emplty!
          </div>
        ) : <div className="flex w-full justify-center items-center">
        order successfully completed!
      </div>}
        
      </section>
      <section
        className={`flex w-full ${
          cart.totalItems ? "justify-end" : "justify-center"
        } items-center mt-8`}
      >
        {cart.totalItems > 0 && !orderStatus ? (
          <div onClick={()=>setOrderStatus(true)} className="rounded-lg flex justify-center items-center px-3 py-2 bg-persianGreen text-white font-medium w-fit cursor-pointer hover:bg-[#007f93]">
            Complete order
          </div>
        ) : (
          <Link
            to="/"
            className="rounded-lg flex justify-center items-center px-3 py-2 bg-persianGreen text-white font-medium w-fit cursor-pointer hover:bg-[#007f93]"
          >
            Home page
          </Link>
        )}
      </section>
    </div>
  );
};

export default Cart;
