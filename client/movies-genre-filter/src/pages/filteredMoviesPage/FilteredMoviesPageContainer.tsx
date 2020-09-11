import React from "react";
import { useLazyQuery } from "@apollo/client";
import MoviesPage from "./FilteredMoviesPage";
import GenreSelectorContainer from "../../components/genreSelector/GenreSelectorContainer";

function FilteredMoviesPageContainer() {
  // const [getData, { data }] = useLazyQuery<any>(GET_MOVIES_BY_GENRE);

  // const onValueChanged = (newValue: string) => {
  //   getData({ variables: { genre: newValue } });
  // };

  const onValueChanged = (newValue: string) => {
    console.log(newValue);
  };

  return (
    <>
      <GenreSelectorContainer selectedValueChanged={onValueChanged} />
      {/* {data && data.moviesByGenre && <MoviesPage movies={data.moviesByGenre} />} */}
    </>
  );
}
export default FilteredMoviesPageContainer;
