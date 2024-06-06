import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const price = 10;

  useEffect(() => {
    // fetch client secret
    if (price && price > 1) {
      getClientSecret({ price: price });
    }
  }, [price]);

  //   get clientSecret
  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    } else if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        email: user?.email,
        payment_amount: price,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      try {
        const { data } = await axiosSecure.post("/payment", paymentInfo);
        console.log(data);
        toast.success("Coin Purchased Successfully");
        navigate("/dashboard/paymentHistory");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form
      className="border-2 p-2 bg-purple-400 rounded-lg mt-6"
      onSubmit={handleSubmit}
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="flex gap-4">
        <div className="stats bg-primary p-2 text-primary-content">
          <div className="stat-title text-white">10 Coins 1 Dollar</div>
          <div className="stat-value">1 Dollars</div>
          <div className="stat-actions">
            <button
              type="submit"
              disabled={!stripe || !clientSecret}
              className="btn w-full btn-success text-white font-semibold t"
            >
              Pay
            </button>
          </div>
        </div>
        <div className="stats bg-primary p-2 text-primary-content">
          <div className="stat-title text-white">100 Coins 9 Dollar</div>
          <div className="stat-value">9 Dollars</div>
          <div className="stat-actions">
            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full btn-success text-white font-semibold t"
            >
              Pay
            </button>
          </div>
        </div>
        <div className="stats bg-primary p-2 text-primary-content">
          <div className="stat-title text-white">500 Coins 19 Dollars</div>
          <div className="stat-value">19 Dollars</div>
          <div className="stat-actions">
            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full btn-success text-white font-semibold t"
            >
              Pay
            </button>
          </div>
        </div>
        <div className="stats bg-primary p-2 text-primary-content">
          <div className="stat-title text-white">1000 Coins 39 Dollar</div>
          <div className="stat-value">39 Dollars</div>
          <div className="stat-actions">
            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full btn-success text-white font-semibold t"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default CheckoutForm;
