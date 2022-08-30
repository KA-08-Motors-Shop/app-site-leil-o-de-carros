import { Cards } from "./style";
import { useState, useEffect } from "react";
import app from "../../Services/api";

const Card = ({ item }) => {
  console.log(item);

  const getFirstLetters = (str) => {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return firstLetters;
  };

  return (
    <Cards>
      <figure className="image-item">
        <img src={item.coverImage} alt="item figure" className="item-img" />
        <figcaption>{item.shortDescription} image</figcaption>
      </figure>
      <h4 className="item-name">{item.title}</h4>
      <h4 className="item-description-area">{item.description}</h4>
      <div className="user-area">
        <div className="inicials" alt="user perfil">
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
