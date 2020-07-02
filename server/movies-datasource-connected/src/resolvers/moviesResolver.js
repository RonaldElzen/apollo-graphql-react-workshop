const movies = async (_root, args, context) => {
  return await context.dataSources.moviesDataSource.getMovies();
};

module.exports = {
  movies,
};
