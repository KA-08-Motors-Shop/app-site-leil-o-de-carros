export const ExampleUser = {
  name: "Ricardo",
  img: "https://istoe.com.br/wp-content/uploads/2021/03/paulo-ricardo.jpg",
  bio: "Eu gosto de carros vermelhos",
  type: "Vendedor",
};

export const ExampleCar = {
  img: "https://github.com/KA-08-Motors-Shop/app-site-leil-o-de-carros/blob/main/src/db/imgs/kombi.png",
  shortDescription: "carro macqueen",
  name: "Marquinho semi-novo 2014",
  itemDescription: "Marquinho feito em 2014 em bom estado unico dono",
  tags: ["0 KM", "2014"],
  user: ExampleUser,
  price: "113.000",
};

export const KarouselExample = [ExampleCar, ExampleCar, ExampleCar];
