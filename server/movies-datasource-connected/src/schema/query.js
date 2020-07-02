const {
  gql,
} = require("../../../movies-genre-filter-query/src/schema/types/node_modules/apollo-server-express");

const Query = gql`
  type Query {
    books: [Book]
    movies: [Movie]
  }
`;

module.exports = {
  Query,
};
