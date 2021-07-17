import React from "react";
import { useRouter } from "next/router";

const header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header__text-box" style={{ marginTop: 50 }}>
        <h1 className="heading-primary">
          <span className="heading-primary--main">Vegan Manna</span>
          <span className="heading-primary--sub">Eat beans not beings</span>
        </h1>

        <a
          onClick={() => router.push("/search")}
          className="custom-btn custom-btn--big custom-btn--white"
        >
          Discover new recipes
        </a>
      </div>
    </header>
  );
};

export default header;
