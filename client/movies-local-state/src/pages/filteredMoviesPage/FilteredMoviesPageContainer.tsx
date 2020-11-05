import React from "react";
import MoviesPage from "./FilteredMoviesPage";
import GenreSelectorContainer from "../../components/genreSelector/GenreSelectorContainer";
import { GET_MOVIES_BY_GENRE } from "./MoviesByGenreQuery";
import { useLazyQuery } from "@apollo/client";

function FilteredMoviesPageContainer() {
  const [getData, { data }] = useLazyQuery<any>(GET_MOVIES_BY_GENRE);

  const onValueChanged = (newValue: string) => {
    getData({ variables: { genre: newValue } });
  };
  return (
    <>
      <GenreSelectorContainer selectedValueChanged={onValueChanged} />
      {data && data.moviesByGenre && <MoviesPage movies={data.moviesByGenre} />}
    </>
  );
}
export default FilteredMoviesPageContainer;
