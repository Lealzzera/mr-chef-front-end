"use client";
import React from "react";
import { OrdersContainer } from "./styles";
import { useUserContext } from "@/context/userContext/userContext";

const OrdersPage = () => {
  const userContext = useUserContext();
  console.log(userContext);
  return <OrdersContainer className="main-container"></OrdersContainer>;
};

export default OrdersPage;
