import { createContext, useState, useEffect } from "react";
import { signin } from "./apis";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (userBody) => {
    const res = await signin(userBody);
    if (res.status === "success") {
      let data = res.data;
      localStorage.setItem("token", data.tokens.access.token);
      localStorage.setItem("expires", data.tokens.access.expires);
      localStorage.setItem("refreshToken", data.tokens.refresh.token);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("user", JSON.stringify(data.user));

      setIsAuthenticated(true);
      setUser(data.user);
    }
    return res;
  };

  return (
    <AppContext.Provider
      value={{
        login,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
