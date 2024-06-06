import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUSBLISHABLE_KEY);

const PurchaseCoins = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Purchase Coins</title>
      </Helmet>
      <h4 className="text-3xl text-purple-800 font-bold text-center my-6">
        Purchase coins
      </h4>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PurchaseCoins;
