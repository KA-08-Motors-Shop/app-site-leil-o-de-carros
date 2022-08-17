import { useContext, useState } from "react";
import { UserContext } from "../../Providers/user";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [data] = useState({
    email: "ricardo@ricardo.com",
    password: "Juan12345678",
  });

  const submitLogin = () => {
    handleLogin(data.email, data.password);
  };

  return (
    <div>
      <button onClick={submitLogin}>Login</button>
    </div>
  );
};

export default Login;
