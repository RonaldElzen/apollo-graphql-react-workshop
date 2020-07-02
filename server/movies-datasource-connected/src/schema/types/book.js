const {
  gql,
} = require("../../../../movies-genre-filter-query/src/schema/types/node_modules/apollo-server-express");

const Book = gql`
  type Book {
    title: String
    author: String
    price: Float
    isbn: String
    description: String
    stock: [Stockdata]
    reviews: [Review]
  }

  type Review {
    name: String
    message: String
    stars: Float
  }

  type Stockdata {
    warehouse: String
    amount: Float
  }
`;

module.exports = {
  Book,
};
