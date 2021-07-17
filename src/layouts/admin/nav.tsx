import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Layout, Form } from "antd";
import Link from "next/link";
import { useWindow } from "hooks";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useUser } from "contexts";
import { useRouter } from "next/router";
import { logout } from "api";

type Props = {
  home?: boolean;
  heading?: any;
  headingButton?: any;
};

const Topbar: React.FC<Props> = ({ home, heading, headingButton }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const mobileInputRef = useRef<any>(null);
  const [user, dispatchUser] = useUser();
  const router = useRouter();
  const [width] = useWindow();

  const [form] = Form.useForm();

  const linkClickHandler = (e?: any) => {
    if (!e) {
      const el: any = document.querySelector("#navi-toggle");
      el.checked = !el.checked;
      return;
    }

    if (e.target.classList.contains("navigation__link")) {
      console.log("yes");
      const el: any = document.querySelector("#navi-toggle");
      el.checked = !el.checked;
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", toggleDropdown);

    return () => {
      window.removeEventListener("mousedown", toggleDropdown);
    };
  }, [open]);

  const toggleDropdown = (e: any) => {
    if (e.target.classList.contains("nav-custom-btn")) {
      setOpen(!open);
    } else if (e.target.classList.contains("nav__dropdown__item")) {
      //
    } else {
      setOpen(false);
    }
  };

  const handleLogout = async () => {
    setOpen(false);
    await logout();
    setTimeout(() => {
      dispatchUser({ type: "SIGN_OUT" });
      router.push("/");
    }, 0);
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
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <div className="search">
          <SearchOutlined
            onClick={() => {
              setSearchOpen(true);
              setTimeout(() => {
                inputRef.current.focus();
              }, 0);
            }}
            className={`search__icon search__icon--${home ? "white" : "green"}`}
          />
          {
            <Form
              className={`search__box ${searchOpen ? "visible" : ""}`}
              form={form}
              initialValues={{ recipeName: "" }}
              onFinish={(values) => {
                if (!!values.recipeName) {
                  router.push({
                    pathname: "/search",
                    query: { recipeName: inputRef.current.value.trim() },
                  });
                } else {
                  router.push({ pathname: "/search" });
                }
              }}
            >
              <Form.Item
                name="recipeName"
                style={{ marginBottom: 0, width: "100%" }}
              >
                <input
                  className="search__input"
                  placeholder="Search here"
                  ref={inputRef}
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <SearchOutlined className="search__icon search__icon--white" />
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      height: 30,
                      padding: 5,
                    }}
                    onClick={() => setSearchOpen(false)}
                  >
                    <span className="search__close">&nbsp;</span>
                  </span>
                </div>
              </Form.Item>
            </Form>
          }
        </div>
        <div className="menus">
          <div>
            <a
              className={`nav-custom-btn nav-custom-btn--${
                home ? "white" : "green"
              }`}
              style={{
                background: open ? "#282828" : home ? "#fff" : "#55C57A",
              }}
            >
              {user.id}
              {"  "}
              {open ? (
                <CaretUpOutlined style={{ pointerEvents: "none" }} />
              ) : (
                <CaretDownOutlined style={{ pointerEvents: "none" }} />
              )}
            </a>
          </div>
        </div>
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

          <Form
            className="navigation__search search__box search__box--mobile"
            form={form}
            initialValues={{ recipeName: "" }}
            onFinish={(values) => {
              if (!!values.recipeName) {
                linkClickHandler();
                router.push({
                  pathname: "/search",
                  query: { recipeName: mobileInputRef.current.value.trim() },
                });
              } else {
                router.push({ pathname: "/search" });
              }
            }}
          >
            <Form.Item
              name="recipeName"
              style={{ marginBottom: 0, width: "100%" }}
            >
              <input
                className="search__input"
                placeholder="Search here"
                ref={mobileInputRef}
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SearchOutlined className="search__icon search__icon--white" />
              </div>
            </Form.Item>
          </Form>

          <nav className="navigation__nav">
            <ul
              onClick={(e) => linkClickHandler(e)}
              className="navigation__list"
            >
              <li className="navigation__item">
                <Link href="/dashboard">
                  <span className="navigation__link">Dashboard</span>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/dashboard/users">
                  <span className="navigation__link">Users</span>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/account/profile">
                  <span className="navigation__link">{user.id}</span>
                </Link>
              </li>
              <li className="navigation__item">
                <a onClick={() => handleLogout()} className="navigation__link">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="nav__dropdown"
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        <a
          onClick={() => {
            router.push("/dashboard");
            setOpen(false);
          }}
          className="nav__dropdown__item"
        >
          Dashboard
        </a>
        <a
          onClick={() => {
            router.push("/dashboard/users");
            setOpen(false);
          }}
          className="nav__dropdown__item"
        >
          Users
        </a>
        <a
          onClick={() => {
            router.push("/account/profile");
            setOpen(false);
          }}
          className="nav__dropdown__item"
        >
          Profile
          {/* {user.email} */}
        </a>
        <a onClick={() => handleLogout()} className="nav__dropdown__item">
          Logout
        </a>
      </div>
      {!home && (
        <div className="nav__title">
          <h2 className="heading-secondary">{heading}</h2>
          {headingButton && (
            <h2 className="heading-button" style={{ marginLeft: 20 }}>
              {headingButton}
            </h2>
          )}
        </div>
      )}
    </Layout.Header>
  );
};

export default Topbar;
