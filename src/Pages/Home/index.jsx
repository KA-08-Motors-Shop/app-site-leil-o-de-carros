import Header from "../../Components/header";
import Karousel from "../../Components/karousel";
import { HomePageStyle } from "./style";
import { useState, useEffect } from "react";
import app from "../../Services/api";

import Button from "../../Components/button";
import Footer from "../../Components/footer";

const HomePage = () => {
  const [announcements, setAnnouncements] = useState();
  const [user, setUsers] = useState();

  const mapAnnouncements = (users) => {
    var list = [];
    users.forEach((user) => {
      user.announcements.forEach((announcement) => {
        announcement.userId = user.id;
        announcement.userName = user.name;
        list.push(announcement);
      });
    });

    setAnnouncements(list);
  };

  useEffect(() => {
    app
      .get(`/announcements/`)
      .then((response) => {
        setUsers(response.data);
        mapAnnouncements(user);
      })
      .catch((err) => console.log(err));
  }, [announcements, user]);

  return (
    <HomePageStyle>
      <Header></Header>
      <div className="entry-text">
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <h4>Um ambiente feito para você explorar o seu melhor</h4>
        <div className="buttons">
          <Button size="big">Leilão</Button>
          <Button size="big">Carros</Button>
          <Button size="big">Motos</Button>
        </div>
      </div>
      <Karousel itens={announcements} title="Anuncios" />
      <Footer></Footer>
    </HomePageStyle>
  );
};

export default HomePage;
