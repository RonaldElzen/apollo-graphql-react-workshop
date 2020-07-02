const { BooksDataSource } = require("./books.js");
const { MoviesDataSource } = require("./movies.js");

const dataSources = () => ({
  booksDataSource: new BooksDataSource(),
  moviesDataSource: new MoviesDataSource()
});

module.exports = {
  dataSources
};
