import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIES } from "./MoviesQuery";
import MoviesPage from "./MoviesPage";

function MoviesPageContainer() {
  const { data, loading } = useQuery<any>(GET_MOVIES);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (data) {
    return <MoviesPage movies={data.movies} />;
  }
  return <></>;
}
export default MoviesPageContainer;
