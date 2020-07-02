const { gql } = require("apollo-server-express");

const Query = gql`
  type Query {
    books: [Book]
    movies: [Movie]
    moviesByGenre(genre: String): [Movie]
  }
`;

module.exports = {
  Query,
};
