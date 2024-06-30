import React from "react";
import toast from "react-hot-toast";

const Success = () => {
  setTimeout(() => toast.success("Your Order has placed Successfully"), 0);
  setInterval(() => toast.success("Your Order has placed Successfully"), 5000);
  return <div></div>;
};

export default Success;
