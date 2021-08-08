import { useState, useEffect } from "react";
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
  const [rate, setRate] = useState<number>(74.21);

  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleCardDetailsChange = (e: any) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError(null);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const billingDetails = {
      name: e.target.name.value,
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: Math.round(amount * rate) * 100,
        currency: "inr",
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

  useEffect(() => {
    axios
      .get(
        "https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=37626aeb5f3d9d707f6d"
      )
      .then((res) => setRate(res.data.USD_INR));
  }, []);

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
          <label className="stripe-label" htmlFor="amount">
            Amount $
          </label>
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
          {isProcessing ? "Processing..." : `Donate $${amount}`}
        </SubmitButton>
      </Row>
    </form>
  );
};

export default CheckoutForm;
