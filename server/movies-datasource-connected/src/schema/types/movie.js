const {
  gql,
} = require("../../../../movies-genre-filter-query/src/schema/types/node_modules/apollo-server-express");

const Movie = gql`
  type Movie {
    title: String
    description: String
    price: Float
    length: String
    genre: String
  }
`;

module.exports = {
  Movie,
};
