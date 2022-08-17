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

export const ExampleUser2 = {
  user: {
    name: "Ricardo",
    email: "ricardo@ricardo.com",
    cpf: "210000000",
    cellphone: "00000000000",
    birthDate: "1992-04-23T18:25:43.511Z",
    description: "Eu gosto de carros vermelhos",
    cep: "26545470",
    state: "RJ",
    city: "Rio de Janeiro",
    street: "Rua da Candelaria",
    number: "01",
    complement: "02",
    isAdvertiser: true,
    isBuyer: false,
    id: "9455c370-2e5c-490d-8180-0e2dd55aef8d",
    announcements: [],
  },
  AccessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9AcmljYXJkby5jb20iLCJpZCI6Ijk0NTVjMzcwLTJlNWMtNDkwZC04MTgwLTBlMmRkNTVhZWY4ZCIsImlhdCI6MTY2MDY3MzIzNiwiZXhwIjoxNjYwNzU5NjM2fQ.7fQanzyFDaz60Zc9567FbE3H3ttWlJi60HWV13AnO0s",
    
};

export const KarouselExample = [ExampleCar, ExampleCar, ExampleCar];
