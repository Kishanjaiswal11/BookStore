import React from "react";
import toast from "react-hot-toast";

const Failure = () => {
  setTimeout(() => toast.error("Your Order has not placed"), 0);
  setInterval(() => toast.error("Your Order has not placed"), 5000);
  return <div></div>;
};

export default Failure;
