import React, { useState, useEffect, useRef } from "react";
import { Layout, Form, Badge, Popover, Divider } from "antd";
import Link from "next/link";
import { useWindow } from "hooks";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useUser } from "contexts";
import Router, { useRouter } from "next/router";
import { logout } from "api";
import { Message } from "interfaces";
import { API, graphqlOperation } from "aws-amplify";

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
  const [read, setRead] = useState<boolean>(false);

  const isMobile = width <= 600;

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
    dispatchUser({ type: "SIGN_OUT" });
    setTimeout(() => {
      if (router.pathname === "/") {
        dispatchUser({ type: "SET_GUEST" });
      } else {
        Router.events.on("routeChangeComplete", () =>
          dispatchUser({ type: "SET_GUEST" })
        );
        router.push("/");
      }
    }, 0);
  };

  const handleVisibleChange = () => {
    setRead(true);

    const unReadMessages = user.messages?.items.filter(
      (message: Message) => message.isRead === 0
    );

    if (unReadMessages?.length === 0) return;

    const messagesMutation: any = unReadMessages?.map(
      (message: Message, i: number) => {
        const input = `{id: "${message.id}", isRead: 1}`;
        return `mutation${i}: updateMessage(input: ${input}) { id }`;
      }
    );

    API.graphql(
      graphqlOperation(`
      mutation markMessageAsRead {
        ${messagesMutation}
      }
    `)
    );
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
        {user && user.sub !== "" && (
          <Badge
            count={
              read
                ? 0
                : user.messages?.items.filter(
                    (message: Message) => message.isRead === 0
                  ).length
            }
            overflowCount={9}
          >
            <Popover
              placement={isMobile ? "bottom" : "bottomRight"}
              title="Messages"
              overlayInnerStyle={{ width: 300 }}
              onVisibleChange={() => handleVisibleChange()}
              content={
                <div>
                  {user.messages?.items.reverse().map((message: Message) => (
                    <>
                      <Link href={`/recipes/${message.recipeID}`}>
                        <span>
                          Your <a>{message.recipeID}</a> recipe has reported
                          <br />
                          {new Date(message.createdAt).toDateString()},{" "}
                          {new Date(message.createdAt).toLocaleTimeString()}
                          <br />
                          <Divider style={{ margin: "14px 0" }} />
                        </span>
                      </Link>
                    </>
                  ))}
                  {user.messages?.items.length === 0 && "No messages received"}
                </div>
              }
              trigger="click"
            >
              <BellOutlined
                style={{ color: home ? "#fff" : "#55C57A", fontSize: "1.5rem" }}
              />
            </Popover>
          </Badge>
        )}
        <div className="menus">
          {user && user.sub !== "" ? (
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
          ) : (
            <>
              <Link href="/auth/login">
                <a
                  className={`custom-btn custom-btn--${
                    home ? "white" : "green"
                  }`}
                >
                  Login
                </a>
              </Link>
              <Link href="/auth/register">
                <a
                  className={`custom-btn custom-btn--${
                    home ? "white" : "green"
                  }`}
                  style={{ marginLeft: 10 }}
                >
                  Register
                </a>
              </Link>
            </>
          )}
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
              {user && user.sub !== "" ? (
                <>
                  <li className="navigation__item">
                    <Link href="/account/profile">
                      <span className="navigation__link">{user.id}</span>
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
                      onClick={() => handleLogout()}
                      className="navigation__link"
                    >
                      Logout
                    </a>
                  </li>
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
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="nav__dropdown"
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        {user.isAdmin && (
          <a
            onClick={() => {
              router.push("/dashboard");
              setOpen(false);
            }}
            className="nav__dropdown__item"
          >
            Dashboard
          </a>
        )}
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
        <a
          onClick={() => {
            router.push("/account/recipes");
            setOpen(false);
          }}
          className="nav__dropdown__item"
        >
          My Recipes
        </a>
        <a
          onClick={() => {
            router.push("/account/recipes/liked");
            setOpen(false);
          }}
          className="nav__dropdown__item"
        >
          Liked Recipes
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
