import { Product } from "./models/Product";

export const products: Product[] = [
  {
    name: "chips",
    price: 3,
  },
  {
    name: "pop",
    price: 2,
  },
  {
    name: "movie",
    price: 20,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length > 0) {
    let sum = 0;
    array.forEach((item) => {
      sum += item.price;
    });
    return sum / array.length;
  } else {
    return 0;
  }
};

// console.log(calcAverageProductPrice([]));
