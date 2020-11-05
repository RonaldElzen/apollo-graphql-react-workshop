const movies = async (_root, args, context) => {
  return await context.dataSources.moviesDataSource.getMovies();
};

const moviesByGenre = async (_root, args, context) => {
  const result = context.dataSources.moviesDataSource.getMovies();
  return result.filter((movie) => movie.genre === args.genre);
};

const movieGenres = async (_root, args, context) => {
  const result = context.dataSources.moviesDataSource.getMovies();
  const genres = [];
  result.forEach((movie) => {
    if (!genres.some((genre) => genre === movie.genre)) {
      genres.push(movie.genre);
    }
  });
  return genres;
};

module.exports = {
  movies,
  moviesByGenre,
  movieGenres,
};
