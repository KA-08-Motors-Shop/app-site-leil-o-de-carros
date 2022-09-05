import { CarInfoStyle } from "./style";
import getFirstLetters from "../../Utils/getFirstLetters";
import { useState } from "react";

const CarInfo = ({ item }) => {
  return (
    <CarInfoStyle>
      <div className="center-column">
        <figure className="car-img-holder ">
          <img src={item.coverImage} alt="item figure" className="item-img" />
          <figcaption>{item.shortDescription} image</figcaption>
        </figure>

        <div className="name-section">
          <h2 className="name">{item.title}</h2>
          <div>
            <div className="tags"></div>
            <p className="price">{item.price}</p>
          </div>
          <button>Comprar</button>
        </div>

        <div className="description">
          <h2>Descrição</h2>
          <p>{item.description}</p>
        </div>

        <div className="comments">
          <h2>Comentários</h2>
          <div>Em breve...</div>
        </div>
      </div>

      <div className="right-column">
        <div className="fotos">
          <h3>Fotos</h3>
          <div className="gallery">
            <img
              src={item.coverImage}
              alt="item figure"
              className="gallery-image"
            />
            <img
              src={item.coverImage}
              alt="item figure"
              className="gallery-image"
            />
            <img
              src={item.coverImage}
              alt="item figure"
              className="gallery-image"
            />
            <img
              src={item.coverImage}
              alt="item figure"
              className="gallery-image"
            />
            <img
              src={item.coverImage}
              alt="item figure"
              className="gallery-image"
            />
            <img
              src={item.coverImage}
              alt="item figure"
              className="gallery-image"
            />
          </div>
        </div>

        <div className="user-section">
          <div className="inicials">{getFirstLetters(item.userName)}</div>
          <p className="user-name">{item.userName}</p>
          <p className="description">{item.userDescription}</p>
          <button>Ver todos anuncios</button>
        </div>
      </div>
    </CarInfoStyle>
  );
};

export default CarInfo;
