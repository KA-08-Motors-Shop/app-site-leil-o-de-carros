import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { FaBars } from "react-icons/fa";

import { Desktop, Mobile } from "./style";

import LogoSVG from "../../Utils/LogoSVG";

const Header = () => {
  const [width, setWidth] = useState("");
  const { user, handleLogOut } = useContext(UserContext);

  const getFirstLetters = (str) => {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return firstLetters;
  };

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
      <Link className="leilao-logo" to="/">
        <figure>
          <LogoSVG alt="Leilão logo" />
          <figcaption>Leilão Logo</figcaption>
        </figure>
      </Link>
      <div className="menu">
        <Link className="link-menu" to="">
          Carros
        </Link>
        <Link className="link-menu" to="">
          Motos
        </Link>
        <Link className="link-menu" to="">
          Leilão
        </Link>

        {user === false ? (
          <div className="login-sub-menu">
            <Link to="/login">Fazer Login</Link>
            <Link to="/cadastro">Cadastrar</Link>
          </div>
        ) : (
          <div className="user-sub-menu">
            <div className="user-modal" onClick={handleModal}>
              <div className="inicials" alt="user perfil">
                {getFirstLetters(user.name)}
              </div>

              <div className="user-name">{user.name}</div>
            </div>

            <div className={userModal ? "user-menu-open" : "user-menu-closed"}>
              <Link to="/profile">Perfil</Link>
              <div onClick={handleLogOut}>
                <h4>Sair</h4>
              </div>
            </div>
          </div>
        )}
      </div>
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
        <div>
          <FaBars
            className="hamburger"
            size={"25px"}
            onClick={handleMobileModal}
          />
          <div className="login-sub-menu">
            <Link to="">Carros</Link>
            <Link to="">Motos</Link>
            <Link to="">Leilão</Link>
            <Link to="/login">Fazer Login</Link>
            <Link to="/cadastro">Cadastrar</Link>
          </div>
        </div>
      ) : (
        <div className="user-sub-menu" onClick={handleModal}>
          <div>
            <div>
              <div alt="user perfil">{getFirstLetters(user.name)}</div>
              <div>{user.name}</div>
            </div>
            {mobileModal && (
              <div className="mobile-modal">
                <Link to="/profile">Perfil</Link>
                <Link to="/">Carros</Link>
                <Link to="/">Motos</Link>
                <Link to="/">Leilão</Link>
                <div onClick={handleLogOut}>
                  <h4>Deslogar</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Mobile>
  );
};

export default Header;
