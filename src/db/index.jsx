export const ExampleUser = {
  name: "Ricardo",
  img: "https://istoe.com.br/wp-content/uploads/2021/03/paulo-ricardo.jpg",
  bio: "Eu gosto de carros vermelhos",
  type: "Vendedor",
};

export const ExampleCar = {
  img: "https://raw.githubusercontent.com/KA-08-Motors-Shop/app-site-leil-o-de-carros/main/src/db/imgs/kombi.png?token=GHSAT0AAAAAABV56TFUDE4KWJQYIZJHHCBCYXVTYSA",
  shortDescription: "kombi",
  name: "Kombi semi-nova 2014",
  itemDescription: "Kombi semi-nova feita em 2014 em bom estado unico dono",
  tags: ["0 KM", "2014"],
  user: ExampleUser,
  price: "113.000",
};

export const KarouselExample = [ExampleCar, ExampleCar, ExampleCar];
