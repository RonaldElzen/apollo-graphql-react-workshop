import React from "react";
import { GET_MOVIES, GET_SELECTED_MOVIES } from "./MoviesQuery";
import MoviesPage from "./MoviesPage";
import { useQuery } from "@apollo/client";
import { client, selectedMoviesVar } from "../../graphql/cache";
import { Movie } from "../../models/Movie";

function MoviesPageContainer() {
  const { data, loading } = useQuery<any>(GET_MOVIES);
  const { selectedMovies } = useQuery<any>(GET_SELECTED_MOVIES).data;

  const getNewMoviesList = (oldMoviesList: Movie[], movie: Movie): Movie[] =>
    oldMoviesList.some((movieItem: Movie) => movie.id === movieItem.id)
      ? oldMoviesList.filter((movieItem: Movie) => movie.id !== movieItem.id)
      : [...oldMoviesList, movie];

  const addOrRemoveQuestion = (movie: Movie) => {
    selectedMoviesVar().some((movieItem: Movie) => movie.id === movieItem.id)
      ? selectedMoviesVar(
          selectedMoviesVar().filter(
            (movieItem: Movie) => movie.id !== movieItem.id
          )
        )
      : selectedMoviesVar([...selectedMoviesVar(), movie]);

    // Example of a non-reactive variable implementation, as that does not work well with cache-persist
    // client.writeQuery({
    //   query: GET_SELECTED_MOVIES,
    //   data: {
    //     selectedMovies: getNewMoviesList(selectedMovies, movie),
    //   },
    // });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (data) {
    return (
      <MoviesPage
        movies={data.movies}
        handleClick={addOrRemoveQuestion}
        selectedMovies={selectedMovies}
      />
    );
  }
  return <></>;
}
export default MoviesPageContainer;
