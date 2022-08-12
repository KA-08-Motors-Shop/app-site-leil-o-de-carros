import { UserInfoStyled } from "./style";

const UserInfo = ({user}) => {
  return (
    <UserInfoStyled>
      <img src={user.img} alt="user profile" />
      <div>
        <h3>{user.name}</h3>
        <h2>{user.type}</h2>
      </div>
      <h2>{user.bio}</h2>
    </UserInfoStyled>
  );
};

export default UserInfo;
