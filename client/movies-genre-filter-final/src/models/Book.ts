export interface Book {
  title: string;
  author: string;
  price: number;
  isbn: string;
  description: string;
  stock: Stockdata[];
  reviews: Review[];
}

export interface Stockdata {
  warehouse: string;
  amount: number;
}

export interface Review {
  name: string;
  message: string;
  stars: number;
}
