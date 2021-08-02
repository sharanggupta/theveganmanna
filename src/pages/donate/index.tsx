import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "layouts";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "components";
import { Button, message } from "antd";

const PUBLISHABLE_KEY: any = process.env.PUBLISHABLE_KEY;
const stripePromise = loadStripe(PUBLISHABLE_KEY);

const Donate = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  return (
    <>
      <MainLayout title="Donate" heading="Donate">
        {showSuccess ? (
          <div className="stripe-success">
            <h1>Thank you! we've recieved you donation</h1>
            <Link href="/">
              <Button type="primary">Go to homepage</Button>
            </Link>
          </div>
        ) : (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              onSuccessfulCheckout={() => {
                message.success("Payment confirmed");
                setShowSuccess(true);
              }}
            />
          </Elements>
        )}
      </MainLayout>
    </>
  );
};

export default Donate;
