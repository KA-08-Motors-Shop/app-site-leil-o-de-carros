import LogoPBSVG from "../../Utils/LogoPBSVG";
import { Footers } from "./style";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Footers>
      <LogoPBSVG></LogoPBSVG>
      <h3>© 2022 - Todos os direitos reservados.</h3>
      <button onClick={scrollToTop}>^</button>
    </Footers>
  );
};

export default Footer;
