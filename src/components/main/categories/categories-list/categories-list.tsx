import React, { useEffect, useState } from "react";
import Button from "../../../button/button";
import { CategoriesListWrap } from "./categories-list.styled";

const CategoriesList = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <CategoriesListWrap>
      {categories.map((category: string) => (
        <Button key={category} category={category} />
      ))}
      <Button category={"random"} />
    </CategoriesListWrap>
  );
};

export default CategoriesList;
