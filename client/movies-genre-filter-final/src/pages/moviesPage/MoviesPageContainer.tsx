import React from "react";
import { GET_MOVIES } from "./MoviesQuery";
import MoviesPage from "./MoviesPage";
import { useQuery } from "@apollo/client";

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
