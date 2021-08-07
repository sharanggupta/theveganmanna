import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "layouts";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "components";
import { Button, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useWindow } from "hooks";
import Slider from "react-slick";

const PUBLISHABLE_KEY: any = process.env.PUBLISHABLE_KEY;
const stripePromise = loadStripe(PUBLISHABLE_KEY);

const Item = () => {
  return (
    <div className="item-container">
      <div className="item">
        <div className="image">
          <img src="/img/image-1-large.jpg" alt="food" />
          <div className="text">hello world</div>
        </div>
        <div className="info">
          <div className="restaurant-name">
            <span className="name">
              <Link href="#">hello world</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div
      className="carousel-arrow"
      style={{
        ...style,
        right: -15,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div
      className="carousel-arrow"
      style={{ ...style, left: -15 }} // should be -25
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const Donate = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [width] = useWindow();

  const slidesCount = () => {
    if (width < 481) {
      return 1;
    } else if (width < 769) {
      return 2;
    } else if (width < 1140) {
      return 3;
    } else {
      return 4;
    }
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slidesCount(),
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <MainLayout title="Donate" heading="Donate">
        <h1 className="heading-tertiary u-center-text">Donation history</h1>

        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <Item />
          ))}
        </Slider>

        {showSuccess ? (
          <div className="stripe-success">
            <h1>Thank you! we've recieved you donation</h1>
            <Link href="/">
              <Button type="primary">Go to homepage</Button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="heading-tertiary u-center-text">
              Help us help the world
            </h1>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                onSuccessfulCheckout={() => {
                  message.success("Payment confirmed");
                  setShowSuccess(true);
                }}
              />
            </Elements>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Donate;
