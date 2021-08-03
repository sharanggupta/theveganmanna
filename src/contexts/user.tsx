import { useRequest } from "ahooks";
import { me, logout } from "api";
import { Loader } from "components";
import { User } from "interfaces";
import React from "react";
import Router, { useRouter } from "next/router";

export type Action =
  | { type: "SIGN_OUT" }
  | { type: "SET_GUEST" }
  | { type: "SIGN_IN"; user: User }
  | { type: "UPDATE"; user: User };

export const defaultUser = {
  id: "",
  sub: "",
  email: "",
  createdAt: "",
  updatedAt: "",
  isActive: 0,
  isAdmin: 0,
  isDeleted: 0,
};

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.user;
    case "UPDATE":
      return action.user;
    case "SIGN_OUT":
      logout();
      return defaultUser;
    case "SET_GUEST":
      return { ...defaultUser, id: "guest" };
    default:
      return state;
  }
};

type Type = [User, (action: Action) => void];
const UserContext = React.createContext<Type>([defaultUser, () => {}]);
interface Props {}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultUser);
  const router = useRouter();

  const { loading } = useRequest(me, {
    initialData: defaultUser,
    onSuccess: async (result: User) => {
      if (result.id === "not_found") {
        await router.push("/account/setup");
        dispatch({ type: "UPDATE", user: result });
      } else if (result) {
        if (result.isActive === 1) {
          dispatch({ type: "SIGN_IN", user: result });
        } else {
          await router.push("/account/deactivated");
          dispatch({
            type: "UPDATE",
            user: { ...defaultUser, id: "deactivated" },
          });
        }
      } else {
        dispatch({ type: "SIGN_OUT" });
        dispatch({ type: "UPDATE", user: { ...defaultUser, id: "guest" } });
      }
    },
  });

  return (
    <UserContext.Provider value={[state, dispatch]}>
      <Loader loading={loading}>{children}</Loader>
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext<Type>(UserContext);
