import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Input from "../inputs/";
import Button from "../button";
import { UserContext } from "../../Providers/user";
import { LoginStyle } from "./style";

const LoginForm = () => {
  const { user, handleLogin } = useContext(UserContext);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (user) {
    history.push("/");
  }

  const submitLogin = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <LoginStyle>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit(submitLogin)}>
        <Input
          name="email"
          register={register}
          label="Email"
          placeholder="Digitar email"
          error={errors.email?.message}
        />

        <Input
          name="password"
          register={register}
          label="Senha"
          icon
          placeholder="Digitar senha"
          type="password"
          error={errors.password?.message}
        />
        <span className="hold-button-entrar">
          <p>Esquecei minha senha</p>
          <Button type="submit">Entrar</Button>
        </span>
      </form>

      <span className="hold-cadastro-button">
        <p>Ainda não possui uma conta?</p>
        <Button>
          <Link to="/cadastro">Cadastrar</Link>
        </Button>
      </span>
    </LoginStyle>
  );
};

export default LoginForm;
