import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import cartReducer, {
  CompletedOrder,
  Initial,
  selectCart,
} from "../redux/reducers/cartReducer";
import { ItemType } from "../redux/store";

const UserOrders = () => {
  const cart = useAppSelector(selectCart);
  return (
    <section className="flex flex-col items-center w-full">
      {!JSON.parse(cart.completedOrders).length && "You haven't ordered anything!"}
      {JSON.parse(cart.completedOrders).map(
        (
          value: CompletedOrder,
          key: number
          ) => {
          const dateObj = new Date(value.time);

          return (
            <Link
              key={value.orderNo}
              to={`/profile/orders/${value.orderNo}`}
              className="flex w-full p-3 rounded-lg shadow-md mb-5"
            >
              <div className="flex w-4/5 item-center flex-col">
                <p className="font-light text-sm mb-3">
                  order no:<span className="font-medium ml-1 ">{value.orderNo}</span>
                </p>
                <p className="font-light text-sm mb-3">
                  date:
                  <span className="font-medium ml-1">{dateObj.getMonth()+1}-{dateObj.getDay()+2}-{dateObj.getFullYear()}</span>
                </p>
                <p className="font-light text-sm">
                  total price:
                  <span className="font-medium ml-1">${value.totalPrice}</span>
                </p>
              </div>
              <div className="flex w-1/5 item-center flex-col justify-center items-end">
                <span className="flex w-fit rounded-xl px-3 py-2 bg-brightGreen text-white text-sm font-semibold">
                  payed
                </span>
              </div>
            </Link>
          );
        }
      )}
    </section>
  );
};

export default UserOrders;
