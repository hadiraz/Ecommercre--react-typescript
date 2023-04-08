import React from "react";
import { Link } from "react-router-dom";
import AddCounter from "./AddCounter";
import { CompletedOrder, Initial } from "../redux/reducers/cartReducer";
import { ItemType } from "../redux/store";

const OrderDetailTable = ({
  cart,
  activeButtons = true,
}: {
  cart: (CompletedOrder | Initial);
  activeButtons: boolean;
}) => {
  console.log(cart , );
  return (
    <table className="w-full min-w-max border-collapse font-light text-center ">
      <thead>
        <tr className="w-full h-10 pt-5" style={{ marginBottom: "1rem" }}>
          <th>row</th>
          <th className="text-center ">item</th>
          <th className="text-center">countity</th>
          <th className="text-center" style={{ paddingLeft: "1rem" }}>
            price
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((value, key) => {
          return (
            <tr className="w-full p-5 border-b border-[#e8e8e8] px-2">
              <td>{key + 1}</td>
              <td className="">
                <div className="flex justify-start items-center p-5">
                  <img
                    src={value.image}
                    className="flex w-20 h-20 p-2 rounded-lg shadow-md"
                  />
                  <Link to={`/product/${value.id}`}>
                    <p className="font-light text-sm ml-5 flex h-full items-center break-words">
                      {value.title}
                    </p>
                  </Link>
                </div>
              </td>
              <td>
                <AddCounter
                  productCartData={value}
                  activeButtons={activeButtons}
                />
              </td>
              <td className="w-10">
                <span className="flex w-10 h-full justify-center items-center text-center ml-3 lg:ml-0">
                  $
                  {String(value.price).split(".").length > 2
                    ? (value.count * value.price).toFixed(2)
                    : value.count * value.price}
                </span>
              </td>
            </tr>
          );
        })}
        <tr className="text-right">
          <th colSpan={4}>
            <span className="mx-3 mt-2">total price : ${cart.totalPrice}</span>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailTable;
