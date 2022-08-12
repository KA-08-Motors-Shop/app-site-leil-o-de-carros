import app from "../../Services/api.js";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@leilao user")) || false
  );

  const history = useHistory();

  const handleLogin = (email, password) => {
    app
      .post("users/login/", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "@leilao Token",
          JSON.stringify(response.data.accessToken)
        );

        localStorage.setItem(
          "@leilao user",
          JSON.stringify(response.data.user)
        );
        setUser(response.data.user);
        history.push("/");
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("@leilao Token");
    localStorage.removeItem("@leilao user");
    setUser(false);
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
