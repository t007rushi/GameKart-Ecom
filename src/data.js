import {v4 as uuidv4} from "uuid";
const data = [
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/71T0ogpJS1L.jpg",
    prod_title: "Last of US 2",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 5499,
    discount: 46,
    rating: 4.5,
    genre: "fps",
    category: "games",
    condition: "new",
    released: new Date("03-05-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/51QKZfyi-dL._SX425_.jpg",
    prod_title: "PS5",
    prod_desc: "PEGI Rating: Ages 13 and Above",
    price: 54999,
    discount: 1,
    rating: 4.5,
    genre: null,
    category: "console",
    condition: "new",

    released: new Date("03-06-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/71ayysKo69L.jpg",
    prod_title: "Last of US",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 2499,
    discount: 20,
    rating: 4.5,
    genre: "fps",
    category: "games",
    condition: "new",

    released: new Date("03-03-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/71XN6RnFchL._SL1500_.jpg",
    prod_title: "PS4",
    prod_desc: "PEGI Rating: Ages 13 and Above",
    price: 40999,
    discount: 10,
    rating: 5,
    genre: null,
    category: "console",
    condition: "pre-owned",
    released: new Date("03-08-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/71R1q5uH2BL._SX425_.jpg",
    prod_title: "PS4 Controller",
    prod_desc: "PEGI Rating: Ages 13 and Above",
    price: 4999,
    discount: 10,
    rating: 4,
    genre: null,
    category: "accesories",
    condition: "new",

    released: new Date("03-10-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/81+ndnoPUkL._SL1500_.jpg",
    prod_title: "Uncharted 4",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 25499,
    discount: 30,
    rating: 4.5,
    genre: "adventure",
    category: "games",
    condition: "new",

    released: new Date("03-07-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/81citugjIUL._SX385_.jpg",
    prod_title: "Assasin creed",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 35499,
    discount: 25,
    rating: 4.5,
    genre: "adventure",
    category: "games",
    condition: "new",

    released: new Date("03-10-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/71PxNaNLNnL._SL1373_.jpg",
    prod_title: "Miles Morales",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 45499,
    discount: 50,
    rating: 4.5,
    genre: "action",
    category: "games",
    condition: "new",

    released: new Date("03-03-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/81WLWhgNxLL._SX425_.jpg",
    prod_title: "Resident Evil",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 15499,
    discount: 5,
    rating: 4.5,
    genre: "horror",
    category: "games",
    condition: "new",

    released: new Date("03-02-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/61uOSq1OJ8L._SX385_.jpg",
    prod_title: "God Of War",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 5499,
    discount: 9,
    rating: 4.5,
    genre: "action",
    category: "games",
    condition: "new",

    released: new Date("03-04-22"),
  },
  {
    id: uuidv4(),
    img: "https://cdn.shopify.com/s/files/1/0385/8490/9956/products/CallofDutyBlackOpsColdWarStandardEdition-PlayStation5_803x1015.jpg",
    prod_title: "COD:Cold War",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 18499,
    discount: 80,
    rating: 4.5,
    genre: "fps",
    category: "games",
    condition: "new",
    released: new Date("03-01-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/91Yd2OK1npL._SX425_.jpg",
    prod_title: "SACKBOY",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 1499,
    discount: 40,
    rating: 4.5,
    genre: "sports",
    category: "games",
    condition: "new",

    released: new Date("03-02-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/91TThgblMlS._SX425_.jpg",
    prod_title: "Returnal",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 5499,
    discount: 75,
    rating: 4.5,
    genre: "action",
    category: "games",
    condition: "new",

    released: new Date("03-10-22"),
  },
  {
    id: uuidv4(),
    img: "https://images-eu.ssl-images-amazon.com/images/I/51FbN+nEf9L._AC_SX184_.jpg",
    prod_title: "Demon Souls",
    prod_desc: "PEGI Rating: Ages 16 and Above",
    price: 5499,
    discount: 15,
    rating: 4.5,
    genre: "action",
    category: "games",
    condition: "new",

    released: new Date("03-12-22"),
  },
  {
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/51Iw5jCQY7L._SX679_.jpg",
    prod_title: "PS4 Headset",
    prod_desc: "PEGI Rating: Ages 13 and Above",
    price: 8999,
    discount: 10,
    rating: 4,
    genre: null,
    category: "accesories",
    condition: "new",

    released: new Date("03-11-22"),
  },
];

export default data;
