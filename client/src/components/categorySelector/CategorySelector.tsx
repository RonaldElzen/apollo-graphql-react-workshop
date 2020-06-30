import React from "react";

interface Props {
  handleChange?: (selectedValue: string) => void;
  categories: string[];
}
function CategorySelector({ handleChange, categories }: Props) {
  const mapOptions = () => {
    return categories.map((category: string) => {
      return (
        <option value={category} id={category} key={category}>
          {category}
        </option>
      );
    });
  };

  return <select>{mapOptions()}</select>;
}

export default CategorySelector;
