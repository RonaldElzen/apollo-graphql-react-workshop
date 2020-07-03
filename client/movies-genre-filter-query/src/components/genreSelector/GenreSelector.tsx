import React from "react";

interface Props {
  handleChange: (selectedValue: string) => void;
  genres: string[];
}

function GenreSelector({ handleChange, genres }: Props) {
  const mapOptions = () => {
    return genres.map((genre: string) => (
      <option value={genre} id={genre} key={genre}>
        {genre}
      </option>
    ));
  };
  return (
    <select
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    >
      {mapOptions()}
    </select>
  );
}

export default GenreSelector;
