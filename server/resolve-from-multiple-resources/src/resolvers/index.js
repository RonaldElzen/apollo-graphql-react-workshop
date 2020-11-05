const { books } = require("./booksResolver");
const { movies, moviesByGenre, movieGenres } = require("./moviesResolver");
const { items } = require("./itemsResolver");
/**
 * The resolver connects a query to its data source.
 * Resolvers let queries know where to get their data from, and map data in the right format.
 */
const resolvers = {
  Query: {
    books,
    items,
    movies,
    moviesByGenre,
    movieGenres,
  },
};

module.exports = {
  resolvers,
};
