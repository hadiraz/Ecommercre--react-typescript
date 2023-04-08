import React from "react";
import { CompletedOrder, Initial, selectCart } from "../redux/reducers/cartReducer";
import OrderDetailTable from "./OrderDetailTable";
import { useAppSelector } from "../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import { ItemType } from "../redux/store";
import { useState, useEffect } from "react";
const ProfileOrderDetail = () => {
  const cart = useAppSelector(selectCart);
  const { sectionParam } = useParams();
  const [order, setOrder] = useState<CompletedOrder>();
  useEffect(() => {
    // JSON.parse(cart.completedOrders).map((value: {items: ItemType[],totalPrice: number,totalCount: number,date: number,orderNo: string}) => {if(value.orderNo === sectionParam) {console.log(value , sectionParam)}}
  }, [cart, sectionParam]);
  useEffect(() => {
    JSON.parse(cart.completedOrders).map(
      (value: CompletedOrder) => {
        if (value.orderNo === sectionParam) {
          setOrder(value);
        }
      }
    );
  }, []);
  return (
    <div className="w-full flex items-center overflow-x-auto">
      {order?.items.length ? <OrderDetailTable cart={order} activeButtons={false} /> : "notFound"}
    </div>
  );
};

export default ProfileOrderDetail;
