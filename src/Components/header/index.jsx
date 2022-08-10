import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/user";

import { Desktop, Mobile } from "./style";

import LogoSVG from "../../Utils/LogoSVG";

const Header = () => {
  const [width, setWidth] = useState("");
  const { user, handleLogOut } = useContext(UserContext);
  const [imgSrc, setImgSrc] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(user.name);
  }, [user]);

  useEffect(() => {
    setImgSrc(user.img);
  }, [user]);

  const [userModal, setUserModal] = useState(false);

  const [mobileModal, setMobileModal] = useState(false);

  const handleModal = () => {
    setUserModal(!userModal);
  };

  const handleMobileModal = () => {
    setMobileModal(!mobileModal);
  };

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return width > 800 ? (
    <Desktop>
      <Link to="/">
        <figure>
          <LogoSVG alt="Leilão logo" />
          <figcaption>Leilão Logo</figcaption>
        </figure>
      </Link>
      <Link to="">Carros</Link>
      <Link to="">Motos</Link>
      <Link to="">Leilão</Link>

      {user === false ? (
        <div className="login-sub-menu">
          <Link to="/login">Fazer Login</Link>
          <Link to="/cadastro">Cadastrar</Link>
        </div>
      ) : (
        <div className="user-sub-menu" onClick={handleModal}>
          {userModal && (
            <div>
              <img src={imgSrc} alt="Perfil"></img>
              <div>{userName}</div>
              <div>
                <Link to="/perfil">Perfil</Link>
                <div onClick={handleLogOut}>
                  <h4>Deslogar</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Desktop>
  ) : (
    <Mobile>
      <Link to="/">
        <figure>
          <LogoSVG alt="Leilão logo" />
          <figcaption>Leilão Logo</figcaption>
        </figure>
      </Link>
      {user === false ? (
        <div className="login-sub-menu">
          <Link to="">Carros</Link>
          <Link to="">Motos</Link>
          <Link to="">Leilão</Link>
          <Link to="/login">Fazer Login</Link>
          <Link to="/cadastro">Cadastrar</Link>
        </div>
      ) : (
        <div className="user-sub-menu" onClick={handleModal}>
          <div>
            <img src={imgSrc} alt="Perfil"></img>
            <div>{userName}</div>
          </div>
          <Link to="/perfil">Perfil</Link>
          <Link to="">Carros</Link>
          <Link to="">Motos</Link>
          <Link to="">Leilão</Link>
          <div onClick={handleLogOut}>
            <h4>Deslogar</h4>
          </div>
        </div>
      )}
    </Mobile>
  );
};

export default Header;
