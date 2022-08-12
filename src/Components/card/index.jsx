import { Cards } from "./style";
import { ExampleUser } from "../../db";

const Card = ({ item, user }) => {
  return (
    <Cards>
      <figure className="image-item">
        <img src={item.img} alt="item figure" className="item-img" />
        <figcaption>{item.shortDescription} image</figcaption>
      </figure>
      <h4 className="item-name">{item.name}</h4>
      <h4 className="item-description-area">{item.itemDescription}</h4>
      <div className="user-area">
        <figure className="perfil-img">
          <img src={ExampleUser.img} alt="user img" />
          <figcaption>Perfil Image</figcaption>
        </figure>
        <h4>{ExampleUser.name}</h4>
      </div>
      <div className="bottom-card">
        <div className="tags">
          {item.tags.map((tag, index) => (
            <div className="tag" key={index}>{tag}</div>
          ))}
        </div>
        <h4 className="price">R${item.price}</h4>
      </div>
    </Cards>
  );
};

export default Card;
