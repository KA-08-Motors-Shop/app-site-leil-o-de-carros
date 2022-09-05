import { useParams } from "react-router-dom";
import app from "../../Services/api";
import { ItemStyle } from "./style";
import { useState, useEffect } from "react";
import CarInfo from "../../Components/car-info";

const ItemPage = () => {
  const { itemId } = useParams();
  const [announcements, setAnnouncements] = useState();
  const [users, setUsers] = useState();
  const [item, setItem] = useState();

  const mapAnnouncements = (users) => {
    var list = [];
    users.forEach((user) => {
      user.announcements.forEach((announcement) => {
        announcement.userId = user.id;
        announcement.userName = user.name;
        announcement.userDescription = user.description;
        list.push(announcement);
      });
    });

    setAnnouncements(list);
    FindAnnouncement();
  };

  const FindAnnouncement = () => {
    announcements.forEach((announcement) => {
      if (announcement.id === itemId) {
        setItem(announcement);
      }
    });
  };

  useEffect(() => {
    app
      .get(`/announcements/`)
      .then((response) => {
        setUsers(response.data);
        mapAnnouncements(users);
      })
      .catch((err) => console.log(err));
  }, [users]);

  return <ItemStyle>{item ? <CarInfo item={item} /> : false}</ItemStyle>;
};

export default ItemPage;
