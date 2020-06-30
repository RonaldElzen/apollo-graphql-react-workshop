import React from "react";
import CategorySelector from "./CategorySelector";

function CategerySelectorContainer() {
  const mockList = ["action", "adventure", "romance"];

  return <CategorySelector categories={mockList} />;
}
export default CategerySelectorContainer;
