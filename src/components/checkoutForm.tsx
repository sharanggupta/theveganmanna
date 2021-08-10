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
  const [rate, setRate] = useState<number>(-1);
  const [currency, setCurrency] = useState<string>("usd");

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

  const getCurrency = () => {
    if (currency === "usd") return "$";
    else if (currency === "jpy") return "¥";
    else if (currency === "eur") return "€";
    else if (currency === "gbp") return "£";
    else if (currency === "inr") return "₹";
    else return "";
  };

  useEffect(() => {
    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=${currency}_INR&compact=ultra&apiKey=37626aeb5f3d9d707f6d`
      )
      .then((res) => setRate(res.data[`${currency.toUpperCase()}_INR`]));
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
          <select
            onChange={(e) => {
              setCurrency(e.target.value);
              axios
                .get(
                  `https://free.currconv.com/api/v7/convert?q=${e.target.value}_INR&compact=ultra&apiKey=37626aeb5f3d9d707f6d`
                )
                .then((res) =>
                  setRate(res.data[`${e.target.value.toUpperCase()}_INR`])
                );
            }}
            name="currency"
            placeholder="currency"
            required
          >
            <option selected value="usd">
              USD $
            </option>
            <option value="jpy">JPY ¥</option>
            <option value="eur">EUR €</option>
            <option value="gbp">GBP £</option>
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
      <Row text>
        <p>
          {rate
            ? `${getCurrency()}${amount} x ${rate.toFixed(2)} = ₹${
                (amount * rate).toFixed(2) || ""
              }`
            : ""}
        </p>
      </Row>
    </form>
  );
};

export default CheckoutForm;
