const movies = async (_root, args, context) => {
  return await context.dataSources.moviesData.getMovies();
};

module.exports = {
  movies
};
