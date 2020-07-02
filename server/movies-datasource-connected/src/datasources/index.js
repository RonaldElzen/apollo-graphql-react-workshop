const { BooksDataSource } = require("./books.js");

const dataSources = () => ({
  booksDataSource: new BooksDataSource(),
  moviesDataSource: new MoviesDataSource(),
});

module.exports = {
  dataSources,
};
