import Cards from "./style";

const Card = ({ item, user }) => {
  return (
    <Cards>
      <figure>
        <img src={item.img} alt="item figure" className="item-img" />
        <figcaption>{item.shortDescription} image</figcaption>
      </figure>
      <h4 className="itemName">{item.name}</h4>
      <h4 className="item-description-area">{item.itemDescription}</h4>
      <div className="user-area">
        <img src={user.img} alt="user img" /> <h4>{user.name}</h4>
      </div>
      <div className="bottom-card">
        <div className="tags">
          {item.tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </div>
        <h4 className="price">{item.price}</h4>
      </div>
    </Cards>
  );
};

export default Card;
