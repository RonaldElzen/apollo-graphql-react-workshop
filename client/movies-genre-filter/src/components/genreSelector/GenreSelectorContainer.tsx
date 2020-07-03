import React from "react";
import GenreSelector from "./GenreSelector";

interface Props {
  selectedValueChanged: (newValue: string) => void;
}

function GenreSelectorContainer({ selectedValueChanged }: Props) {
  return (
    <GenreSelector
      genres={["Action", "Adventure"]}
      handleChange={selectedValueChanged}
    />
  );
}
export default GenreSelectorContainer;
