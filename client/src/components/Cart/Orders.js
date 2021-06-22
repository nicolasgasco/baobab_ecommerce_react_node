import { useContext, useEffect, useState } from "react";
import OrderOverview from "./OrderOverview";

import useHttp from "../../hooks/use-http";
import jwt_decode from "jwt-decode";

import CartContext from "../../store/cart-context";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { sendRequest: fetchOrders } = useHttp();

  const { userAddress } = useContext(CartContext);

  useEffect(() => {
    const userToken = jwt_decode(localStorage.getItem("token"));
    console.log("fetching orders");
    const handleFetchedOrders = (result) => {
      console.log(result);
      if (!result.ordersFound) {
        throw new Error("No results found");
      }
      setOrders(result.result);
    };
    fetchOrders({ url: `/api/order/${userToken._id}` }, handleFetchedOrders);
  }, [fetchOrders]);

  const formatDate = (dateObj) => {
    dateObj = Date.parse(dateObj);
    dateObj = new Date(dateObj);
    const date = dateObj.getDate();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Since getMonth() returns month from 0-11 not 1-12
    const year = dateObj.getFullYear();

    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const dateStr = `${date}/${month}/${year} (${hour}:${minutes}:${seconds})`;
    return dateStr;
  };

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const capitalizeOnlyFirst = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const showOrders = orders.map((order) => {
    console.log(order.userAddress);
    return (
      <div key={order.orderId}>
        <h3 className="font-bold text-xl mt-6">
          Order number # {order.orderId}
        </h3>
        <h3 className="font-bold text-xl">
          Order sent:{" "}
          <span className="font-normal text-sm">
            {formatDate(order.creationDate)}
          </span>
        </h3>
        <h3 className="font-bold text-xl">
          Sent to:{" "}
          <span className="font-normal text-sm">
            {`${capitalizeOnlyFirst(order.userAddress.street)}, ${
              order.userAddress.zip
            } ${capitalizeWord(order.userAddress.city)},  ${capitalizeOnlyFirst(
              order.userAddress.province
            )}`}
          </span>
        </h3>
        <OrderOverview classes="mb-12" items={order.items} id={order.orderId} />
      </div>
    );
  });

  return (
    <>
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Your orders
      </h2>
      <div>{showOrders}</div>
    </>
  );
};

export default Orders;