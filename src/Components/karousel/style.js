import styled from "styled-components";

export const Karousels = styled.div`
  display: flex;
  flex-direction: column;
  height: 420px;
  margin-bottom: 100px;

  .karousel-title {
    font-size: 24px;
    font-weight: 600px;
    margin-bottom: 60px;
    margin-left: 48px;
  }

  .itens {
    display: flex;
    width: calc(100vw - 20px);
    overflow-x: scroll;
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

  .no-itens {
    height: 300px;
    width: 80vw;
    border: 1px solid var(--grey6);
    border-radius: 4px;
    box-shadow: 10px 4px 40px -10px rgba(0, 0, 0, 0.25);
    text-align: center;
    padding-top: 140px;
  }
`;
