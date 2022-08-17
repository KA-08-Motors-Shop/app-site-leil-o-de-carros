import LoginForm from "../../Components/login-form";
import Footer from "../../Components/footer";
import Header from "../../Components/header";
import { LoginPage } from "./style";

const Login = () => {
  return (
    <LoginPage>
      <Header />
      <LoginForm />
      <Footer />
    </LoginPage>
  );
};

export default Login;
