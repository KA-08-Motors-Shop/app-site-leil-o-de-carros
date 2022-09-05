import styled from "styled-components";

export const CarInfoStyle = styled.div`
  display: flex;
  flex-direction: column;

  .car-img-holder {
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

  .name-section {
    max-width: 100%;
    margin: 10px;
    background-color: var(--grey10);
    border-radius: 4px;
  }

  .description {
    max-width: 100%;
    margin: 10px;
    background-color: var(--grey10);
    border-radius: 4px;
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
`;
