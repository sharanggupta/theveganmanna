import { Layout } from "antd";
import React from "react";
import Head from "next/head";

const LoaderSVG = (wid?: string, color: string = "#55c57a") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto",
    }}
    width={wid}
    height={wid}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="42.76482137044271 42.76482137044271"
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
      strokeLinecap="round"
      style={{ transform: "scale(1)", transformOrigin: "50px 50px" }}
    >
      <animate
        attributeName="stroke-dashoffset"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0;256.58892822265625"
      />
    </path>
  </svg>
);

interface Props {
  size?: string;
  loading: boolean;
}

const Loader: React.FC<Props> = ({ size = "10rem", loading, children }) => {
  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Head>
        <title>The Vegan Manna</title>
      </Head>
      {LoaderSVG(size)}
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
