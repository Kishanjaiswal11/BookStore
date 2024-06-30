import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "../context/AuthProvider";

function Cards({ item }) {
  // payment Integration
  const [authUser, setAuthUser] = useAuth();
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PWtMW2LLWUYGpOx3XBifoFd40ImPIYTTcILo7NFzRNQ23GV0nuaOQExSJ4hoJXpLv3BKUXKf4Jvbj2qqPlrbU9O00yWH8IjOQ"
    );
    const body = {
      products: item,
    };
    const headers = {
      Authorization: `Bearer ${authUser.token}`,
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `https://bookstore-pgmt.onrender.com/book/course/api/payment`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div
                onClick={
                  authUser
                    ? makePayment
                    : () => document.getElementById("my_modal_3").showModal()
                }
                className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
