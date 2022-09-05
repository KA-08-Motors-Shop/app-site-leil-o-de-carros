import { Cards } from "./style";
import { useHistory } from "react-router-dom";

const Card = ({ item }) => {
  let history = useHistory();

  const getFirstLetters = (str) => {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return firstLetters;
  };

  function handleClickItem() {
    history.push(`/announcements/${item.id}`);
  }

  function handleClickUser() {
    history.push(`/user/${item.userId}`);
  }

  return (
    <Cards>
      <figure className="image-item" onClick={handleClickItem}>
        <img src={item.coverImage} alt="item figure" className="item-img" />
        <figcaption>{item.shortDescription} image</figcaption>
      </figure>
      <h4 className="item-name" onClick={handleClickItem}>
        {item.title}
      </h4>
      <h4 className="item-description-area">{item.description}</h4>
      <div className="user-area">
        <div className="initials" alt="user perfil">
          <p>{getFirstLetters(item.userName)}</p>
        </div>
        <h4>{item.userName}</h4>
      </div>
      <div className="bottom-card">
        <h4 className="price">R${item.price}</h4>
      </div>
    </Cards>
  );
};

export default Card;
