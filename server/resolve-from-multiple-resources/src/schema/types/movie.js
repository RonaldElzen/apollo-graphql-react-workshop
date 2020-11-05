const { gql } = require("apollo-server-express");

const Movie = gql`
  type Movie {
    title: String
    description: String
    price: Float
    length: String
    genre: String
    id: Float
  }
`;

module.exports = {
  Movie,
};
