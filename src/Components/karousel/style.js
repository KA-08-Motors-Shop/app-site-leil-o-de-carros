import styled from "styled-components";

export const Karousels = styled.div`
  display: flex;
  flex-direction: column;
  min-heigth: 420px;
  overflow: hidden;

  .karousel-title {
    font-size: 24px;
    font-weight: 600px;
    margin-bottom: 60px;
    margin-left: 48px;
  }

  .itens {
    display: flex;
  }

  .perfil-img {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    border: 1px solid var(--grey6);
    overflow: hidden;
  }

  .perfil-img > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  figcaption {
    display: none;
  }

  .image-item > img {
    height: 152px;
  }
`;
