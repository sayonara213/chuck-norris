import React from "react";
import { CategoriesTitle, CategoriesWrap } from "./categories.styled";
import CategoriesList from "./categories-list/categories-list";

const Categories = () => {
  return (
    <CategoriesWrap>
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesList />
    </CategoriesWrap>
  );
};

export default Categories;
