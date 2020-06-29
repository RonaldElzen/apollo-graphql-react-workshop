const { BooksDataSource } = require("./books.js");

const dataSources = () => ({
  booksDataSource: new BooksDataSource(),
});

module.exports = {
  dataSources,
};
