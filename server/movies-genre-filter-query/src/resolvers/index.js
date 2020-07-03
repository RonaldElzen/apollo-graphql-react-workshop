const { books } = require("./booksResolver");
const { movies, moviesByGenre, movieGenres } = require("./moviesResolver");

/**
 * The resolver connects a query to its data source.
 * Resolvers let queries know where to get their data from, and map data in the right format.
 */
const resolvers = {
  Query: {
    books,
    movies,
    moviesByGenre,
    movieGenres,
  },
};

module.exports = {
  resolvers,
};
