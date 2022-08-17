import Card from "../card/index";
import { Karousels } from "./style";

const Karousel = ({ itens, title }) => {
  return (
    <Karousels>
      <h2 className="karousel-title">{title}</h2>
      <div className="itens">
        {itens.length > 0 ? (
          <div>
            {itens.map((item, index) => (
              <Card key={index} item={item} user={item.user}></Card>
            ))}
          </div>
        ) : (
          <div className="no-itens">Não a itens a serem mostrados!</div>
        )}
      </div>
    </Karousels>
  );
};

export default Karousel;
