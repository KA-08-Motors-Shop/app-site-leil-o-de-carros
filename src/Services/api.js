import axios from "axios";

const app = axios.create({
  baseURL: "https://api-carros-leilao.herokuapp.com/",
});

export default app;
