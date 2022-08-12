import Header from "../../Components/header";
import Karousel from "../../Components/karousel";
import UserInfo from "../../Components/user-info";
import { Profiles } from "./style";
import { ExampleUser, KarouselExample } from "../../db/examples";

const Profile = () => {
  return (
    <Profiles>
      <Header></Header>
      <UserInfo user={ExampleUser}></UserInfo>
      <Karousel itens={KarouselExample}></Karousel>
    </Profiles>
  );
};

export default Profile;
