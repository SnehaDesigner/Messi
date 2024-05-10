import orangeShoe from "./assets/shoeOne.jpg";
import purpleShoe from "./assets/shoeTwo.jpg";
import greenShoe from "./assets/shoeThree.jpg";
import lightGreenShoe from "./assets/shoeFour.jpg";

export const AVAILABLE_PRODUCTS = [
  {
    id: "p1",
    title: "First Shoe",
    price: "110.00",
    image: {
      src: orangeShoe,
      alt: "Orange Shoe",
    },
  },
  {
    id: "p2",
    title: "Second Shoe",
    price: "240.00",
    image: {
      src: purpleShoe,
      alt: "Purple Shoe",
    },
  },
  {
    id: "p3",
    title: "Third Shoe",
    price: "1700.00",
    image: {
      src: greenShoe,
      alt: "Green Shoe",
    },
  },
  {
    id: "p4",
    title: "Fourth Shoe",
    price: "900.00",
    image: {
      src: lightGreenShoe,
      alt: "Light Green Shoe",
    },
  },
];
