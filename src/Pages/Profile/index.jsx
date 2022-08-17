import Header from "../../Components/header";
import Karousel from "../../Components/karousel";
import UserInfo from "../../Components/user-info";
import { Profiles } from "./style";
import Footer from "../../Components/footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Providers/user";
import app from "../../Services/api";

const Profile = () => {
  const { user, userAnnouncements, setUserAnnouncements } =
    useContext(UserContext);

  useEffect(() => {
    app
      .get(`/user/${user.id}`)
      .then((response) => {
        setUserAnnouncements(response.data.announcements);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, [user.id, setUserAnnouncements]);

  return (
    <Profiles>
      <Header />
      <UserInfo user={user.id}></UserInfo>
      <Karousel title={"Carros"} itens={userAnnouncements}></Karousel>
      <Footer />
    </Profiles>
  );
};

export default Profile;
