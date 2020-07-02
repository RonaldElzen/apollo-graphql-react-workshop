const { gql } = require("apollo-server-express");

const Query = gql`
  type Query {
    books: [Book]
    movies: [Movie]
  }
`;

module.exports = {
  Query,
};
