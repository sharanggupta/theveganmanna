import React from "react";
import { Button, Layout, Form } from "antd";
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
  const [form] = Form.useForm();

  const linkClickHandler = (e: any) => {
    if (e.target.classList.contains("navigation__link")) {
      const el: any = document.querySelector("#navi-toggle");
      el.checked = !el.checked;
    }
  };

  return (
    <Layout.Header className="nav">
      <Link href="/">
        <img
          className="nav__logo"
          alt=""
          src="/leaf.png"
          style={{ width: 50 }}
        />
      </Link>
      <div className="menus">
        <Link href="/auth/login">
          <a className={`custom-btn custom-btn--${home ? "white" : "green"}`}>
            Login
          </a>
        </Link>
        <Link href="/auth/register">
          <a
            className={`custom-btn custom-btn--${home ? "white" : "green"}`}
            style={{ marginLeft: 10 }}
          >
            Register
          </a>
        </Link>
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
              {user && user.sub !== "" ? (
                <>
                  <li className="navigation__item">
                    <Link href="/account/profile">
                      <span className="navigation__link">Profile</span>
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link href="/account/recipes">
                      <span className="navigation__link">My Recipes</span>
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link href="/account/recipes/liked">
                      <span className="navigation__link">Liked Recipes</span>
                    </Link>
                  </li>
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

                  <div className="search__box search__box--mobile visible">
                    <input
                      className="search__input"
                      placeholder="Search here"
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SearchOutlined
                        onClick={() => console.log("search")}
                        className="search__icon search__icon--white"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="navigation__item">
                    <Link href="/auth/login">
                      <span className="navigation__link">Login</span>
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link href="/auth/register">
                      <span className="navigation__link">Register</span>
                    </Link>
                  </li>
                  <Form
                    form={form}
                    initialValues={{ recipeName: "" }}
                    onFinish={(values) => {
                      if (!!values.recipeName) {
                        router.push({
                          pathname: "/search",
                          query: { recipeName: values.recipeName.value.trim() },
                        });
                      } else {
                        router.push({ pathname: "/search" });
                      }
                    }}
                  >
                    <div className="search__box search__box--mobile visible">
                      <Form.Item
                        name="recipeName"
                        style={{ marginBottom: 0, width: "100%" }}
                      >
                        <input
                          className="search__input"
                          placeholder="Search here"
                        />
                      </Form.Item>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <SearchOutlined
                          onClick={() => form.submit()}
                          className="search__icon search__icon--white"
                        />
                      </div>
                    </div>
                  </Form>
                </>
              )}
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
