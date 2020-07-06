const { gql } = require("apollo-server-express");

const Movie = gql`
  type Movie {
    title: String
    author: String
    price: Float
    isbn: String
    description: String
    stock: [Stockdata]
    reviews: [Review]
  }
`;

module.exports = {
  Movie
};
