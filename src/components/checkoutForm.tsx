import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Row from "./prebuilt/Row";
import BillingDetailsFields from "./prebuilt/BillingDetailsFields";
import SubmitButton from "./prebuilt/SubmitButton";
import CheckoutError from "./prebuilt/CheckoutError";

type Props = {
  onSuccessfulCheckout: () => void;
};
const CheckoutForm: React.FC<Props> = ({ onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState<any>(null);
  const [amount, setAmount] = useState<any>("");
  const [currency, setCurrency] = useState<string>("");

  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleCardDetailsChange = (e: any) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError(null);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log("currency:", e.target.currency.value);

    const billingDetails = {
      name: e.target.name.value,
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: amount * 100,
        currency: e.target.currency.value,
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const iframeStyles = {
    base: {
      color: "#fff",
      fontSize: "16px",
      lineHeight: 1.4,
      iconColor: "#fff",
      "::placeholder": {
        color: "#acc9f0",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts: any = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  const getCurrency = () => {
    if (currency === "usd") return "$";
    else if (currency === "inr") return "₹";
    else return "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsFields />
      </Row>
      <Row>
        <div className="card-element-container">
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </div>
      </Row>
      <Row>
        <div className="form-field-container">
          <select
            onChange={(e) => setCurrency(e.target.value)}
            name="currency"
            placeholder="currency"
            required
          >
            <option value="" selected disabled>
              select currency
            </option>
            <option value="usd">USD $</option>
            <option value="inr">INR ₹</option>
          </select>
          <input
            className="stripe-input"
            name="amount"
            type="number"
            placeholder="amount"
            onChange={(e: any) => setAmount(e.target.value)}
            value={amount}
            min={1}
            max={999999999}
            required
          />
        </div>
      </Row>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <Row>
        <SubmitButton disabled={amount <= 0 || isProcessing || !stripe}>
          {isProcessing ? "Processing..." : `Donate ${getCurrency()}${amount}`}
        </SubmitButton>
      </Row>
    </form>
  );
};

export default CheckoutForm;
