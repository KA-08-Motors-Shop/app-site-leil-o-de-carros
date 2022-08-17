import { UserInfoStyled } from "./style";
import { UserContext } from "../../Providers/user";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const UserInfo = ({ id }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if (!user) {
    history.push("/login");
  }

  const getFirstLetters = (str) => {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return firstLetters;
  };

  return (
    <UserInfoStyled>
      <div className="inicials" alt="user perfil">
        <p>{getFirstLetters(user.name)}</p>
      </div>
      <div className="user-name">
        <h3>{user.name}</h3>
        <div className="tag-user-type">
          <p>{user.isAdvertiser ? "Anunciante" : "Comprador"}</p>
        </div>
      </div>
      <p className="user-bio">{user.description}</p>
    </UserInfoStyled>
  );
};

export default UserInfo;
