import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
export const makePayment = async (req, res) => {
  const { products } = req.body;
  console.log(products);

  const line_item = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: products.name,
        },
        unit_amount: products.price * 100,
      },
      quantity: 1,
    },
  ];
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_item,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/failure",
  });

  res.json({ id: session.id });
};
