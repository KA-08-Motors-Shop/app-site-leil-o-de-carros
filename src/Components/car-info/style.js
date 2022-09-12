import styled from "styled-components";

export const CarInfoStyle = styled.div`
  display: flex;
  flex-direction: column;

  .car-img-holder {
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: var(--grey10);
    height: 30vh;
    max-width: 100%;
    margin: 10px;
    border-radius: 4px;
  }

  .item-img {
    width: auto;
    max-width: 100%;
    height: calc(100% - 30px);
    margin: 15px;
    object-fit: contain;
    border-radius: 4px;
  }

  figcaption {
    display: none;
  }

  .fotos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--grey10);
    max-width: 100%;
    margin: 10px;
    padding: 30px;
    border-radius: 4px;
  }

  .fotos > h3 {
    font-size: 20px;
    weight: 600;
    margin-bottom: 30px;
  }

  .gallery {
    width: 300px;
  }

  .gallery > img {
    height: 90px;
    width: 90px;
    margin-right: 5px;
    margin-bottom: 25px;
    border-radius: 4px;
    object-fit: contain;
  }

  .name-section {
    padding: 30px;
    max-width: 100%;
    margin: 10px;
    background-color: var(--grey10);
    border-radius: 4px;
  }

  .name {
    font-family: "Lexend", sans-serif;
    font-wheight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .tags {
  }

  .price {
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: var(--grey1);
    margin-bottom: 20px;
  }

  .comprar-btn {
    width: 100px;
    height: 38px;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    border-radius: 4px;
    border: none;
  }

  .description {
    padding: 30px;
    max-width: 100%;
    margin: 10px;
    background-color: var(--grey10);
    border-radius: 4px;
  }

  .description > h2 {
    font-size: 20px;
    weight: 600;
    margin-bottom: 30px;
    font-family: "Lexend", sans-serif;
  }

  .description > p {
    font-size: 16px;
    font-weight: 400;
    color: var(--grey2);
  }

  .comments {
    max-width: 100%;
    margin: 10px;
    background-color: var(--grey10);
    border-radius: 4px;
  }

  .gallery-image {
    height: 108px;
    width: 108px;
  }

  .user-section {
    padding: 30px;
    max-width: 100%;
    margin: 10px;
    background-color: var(--grey10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inicials-user-section {
    height: 77px;
    width: 77px;
    border-radius: 50px;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .user-name {
    font-size: 20px;
    weight: 600;
    margin-bottom: 10px;
    font-family: "Lexend", sans-serif;
  }

  .description {
    color: var(--grey2);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .user-section > button {
    width: 206px;
    height: 48px;
    background-color: var(--grey0);
    border-radius: 4px;
    color: var(--whiteFixed);
    border: none;
    font-weight: 600;
    font-size: 16px;
  }

  .comments {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .comments > h2 {
    font-size: 20px;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: var(--grey1);
    margin-bottom: 15px;
  }

  @media (min-width: 800px) {
    .car-info-holder {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 14px;
      row-gap: 0;
    }
    .car-img-holder {
      grid-column-start: 2;
      grid-column-end: 8;
      grid-row-start: 1;
      grid-row-end: 1;
      height: 250px;
    }
    .name-section {
      grid-column-start: 2;
      grid-column-end: 8;
      grid-row-start: 2;
    }
    .description {
      grid-column-start: 2;
      grid-column-end: 8;
      grid-row-start: 3;
    }
    .fotos {
      grid-column-start: 8;
      grid-column-end: 12;
      grid-row-start: 1;
      height: 250px;
    }
    .user-section {
      grid-column-start: 8;
      grid-column-end: 12;
      grid-row-start: 2;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    .gallery img {
      width: 30%;
      height: auto;
    }
  }
  @media (min-width: 1300px) {
    .car-info-holder {
      display: grid;
      grid-template-columns: 2fr repeat(10, 1fr) 2fr;
      column-gap: 14px;
      row-gap: 0;
    }
    .car-img-holder,
    .fotos {
      height: 350px;
    }
  }
`;
