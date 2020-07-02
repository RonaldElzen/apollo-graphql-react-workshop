const books = async (_root, args, context) => {
  return await context.dataSources.booksDataSource.getBooks();
};

module.exports = {
  books,
};
