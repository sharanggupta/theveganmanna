import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import Link from "next/link";
import { MainLayout } from "layouts";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "components";
import { Button, message, Spin } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { listDonationsApi } from "api";
import { useWindow } from "hooks";
import Slider from "react-slick";
import { Donation } from "interfaces";
import { Storage } from "aws-amplify";

const PUBLISHABLE_KEY: any = process.env.PUBLISHABLE_KEY;
const stripePromise = loadStripe(PUBLISHABLE_KEY);

const Item = ({ donation }: { donation: Donation }) => {
  const [signedUrl, setSignedUrl] = useState("");

  const fetchImage = async () => {
    const url: any = await Storage.get(donation.image);
    setSignedUrl(url);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="item-container">
      <div className="item">
        <div className="image">
          {signedUrl ? (
            <img src={signedUrl} alt="donation" loading="lazy" />
          ) : (
            <Spin />
          )}
        </div>
        <div className="info">{donation.caption}</div>
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

  const { data, loading, refresh, run } = useRequest<Donation[]>(() =>
    listDonationsApi()
  );

  const slidesCount = () => {
    if (width <= 600) {
      return 1;
    } else if (width <= 968) {
      if (data && data.length < 2) return data.length;
      return 2;
    } else if (width <= 1200) {
      if (data && data.length < 3) return data.length;
      return 3;
    } else {
      if (data && data.length < 4) return data.length;
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

  useEffect(() => {
    if (!loading) {
      console.log("data:", data);
    }
  }, [loading]);

  return (
    <>
      {!loading && data ? (
        <MainLayout title="Donate" heading="Donate">
          <h1 className="heading-tertiary u-center-text">
            Help us help the world
          </h1>

          <Slider {...settings}>
            {data.map((donation) => (
              <Item donation={donation} />
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
      ) : (
        <MainLayout title="Loading">
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default Donate;
