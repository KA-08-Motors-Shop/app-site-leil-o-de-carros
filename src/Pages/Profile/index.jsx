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

  const announcementsProcessor = (users) => {
    var list = [];
    users.announcements.forEach((announcement) => {
      announcement.userId = users.id;
      announcement.userName = users.name;
      list.push(announcement);
    });
    setUserAnnouncements(list);
  };

  useEffect(() => {
    app
      .get(`/user/${user.id}`)
      .then((response) => {
        announcementsProcessor(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, [user.id]);

  return (
    <Profiles>
      <Header />
      <UserInfo user={user.id}></UserInfo>
      <Karousel title={"Anuncios"} itens={userAnnouncements}></Karousel>
      <Footer />
    </Profiles>
  );
};

export default Profile;
