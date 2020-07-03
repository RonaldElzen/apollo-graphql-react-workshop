import React from "react";
import GenreSelector from "./GenreSelector";

function GenreSelectorContainer() {
  const mockList = ["action", "adventure", "romance"];
  const handleChange = () => {
    console.log("changed");
  };
  return <GenreSelector categories={mockList} handleChange={handleChange} />;
}
export default GenreSelectorContainer;
