import Card from "../card/index";
import { Karousels } from "./style";

const Karousel = ({ itens, title }) => {
  return (
    <Karousels>
      <h2 className="karousel-title">{title}</h2>
      <div className="itens">
        {itens.map((item, index) => (
          <Card key={index} item={item} user={item.user}></Card>
        ))}
      </div>
    </Karousels>
  );
};

export default Karousel;
