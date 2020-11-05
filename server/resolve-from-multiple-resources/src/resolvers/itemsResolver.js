const items = async (_root, _, context) => {
  const books = await context.dataSources.booksDataSource.getBooks();
  const movies = await context.dataSources.moviesDataSource.getMovies();
  return [
    ...movies.map((movie) => ({
      title: movie.title,
      id: movie.id,
      author: movie.author,
      description: movie.description,
    })),
    ...books.map((book) => ({
      title: book.title,
      id: book.id,
      author: book.author,
      description: book.description,
    })),
  ];
};

module.exports = {
  items,
};
