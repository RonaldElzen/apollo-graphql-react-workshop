const movies = async (_root, args, context) => {
  return await context.dataSources.moviesDataSource.getMovies();
};

const moviesByGenre = async (_root, args, context) => {
  const result = context.dataSources.moviesDataSource.getMovies();
  return result.filter((movie) => movie.genre === args.genre);
};

module.exports = {
  movies,
  moviesByGenre,
};
