import Header from "../../Components/header";
import Karousel from "../../Components/karousel";
import { HomePageStyle } from "./style";

import Button from "../../Components/button";

import { KarouselExample } from "../../db";
import Footer from "../../Components/footer";

const HomePage = () => {

  

  return (
    <HomePageStyle>
      <Header></Header>
      <div className="entry-text">
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <h4>Um ambiente feito para você explorar o seu melhor</h4>
        <div className="buttons">
          <Button size="big">Leilão</Button>
          <Button size="big">Carros</Button>
          <Button size="big">Motos</Button>
        </div>
      </div>
      <Karousel itens={KarouselExample} title="Carros" />
      <Footer></Footer>
    </HomePageStyle>
  );
};

export default HomePage;
