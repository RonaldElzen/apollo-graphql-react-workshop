import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GenreSelector from "./GenreSelector";
import { GET_GENRES } from "./GetGenresQuery";

interface Props {
  selectedValueChanged: (newValue: string) => void;
}

function GenreSelectorContainer({ selectedValueChanged }: Props) {
  const { data } = useQuery<any>(GET_GENRES);

  if (data && data.movieGenres.length > 0) {
    return (
      <GenreSelector
        genres={data.movieGenres}
        handleChange={selectedValueChanged}
      />
    );
  }
  return <></>;
}
export default GenreSelectorContainer;
