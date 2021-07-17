import React from "react";
import { Button, Layout } from "antd";
import Link from "next/link";
import { useWindow } from "hooks";
import { SearchOutlined } from "@ant-design/icons";
import { useUser } from "contexts";
import { useRouter } from "next/router";
import { logout } from "api";

type Props = {
  home?: boolean;
  heading?: any;
};

const Topbar: React.FC<Props> = ({ home, heading }) => {
  const [user, dispatchUser] = useUser();
  const router = useRouter();
  const [width] = useWindow();

  const linkClickHandler = (e: any) => {
    if (e.target.classList.contains("navigation__link")) {
      const el: any = document.querySelector("#navi-toggle");
      el.checked = !el.checked;
    }
  };

  return (
    <Layout.Header className="nav">
      <img
        className="nav__logo"
        alt=""
        src="/leaf.png"
        style={{ width: 50, cursor: "default" }}
      />
      <div className="menus">
        <a
          className={`custom-btn custom-btn--${home ? "white" : "green"}`}
          onClick={() => {
            logout();
            setTimeout(() => {
              dispatchUser({ type: "SIGN_OUT" });
              router.push("/");
            }, 0);
          }}
        >
          Logout
        </a>
      </div>

      <div className="mobile-menus">
        <div className="navigation">
          <input
            type="checkbox"
            name=""
            id="navi-toggle"
            className="navigation__checkbox"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul
              onClick={(e) => linkClickHandler(e)}
              className="navigation__list"
            >
              <li className="navigation__item">
                <a
                  onClick={() => {
                    logout();
                    setTimeout(() => {
                      dispatchUser({ type: "SIGN_OUT" });
                      router.push("/");
                    }, 0);
                  }}
                  className="navigation__link"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {!home && (
        <div className="nav__title">
          <h2 className="heading-secondary">{heading}</h2>
        </div>
      )}
    </Layout.Header>
  );
};

export default Topbar;
