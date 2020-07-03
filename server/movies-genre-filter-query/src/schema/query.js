const { gql } = require("apollo-server-express");

const Query = gql`
  type Query {
    books: [Book]
    movies: [Movie]
    moviesByGenre(genre: String): [Movie]
    movieGenres: [String]
  }
`;

module.exports = {
  Query,
};
