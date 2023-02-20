import React from "react";

import CategoriesList from "./categories-list/categories-list";

import { CategoriesTitle, CategoriesWrap } from "./categories.styled";

const Categories = () => {
  return (
    <CategoriesWrap>
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesList />
    </CategoriesWrap>
  );
};

export default Categories;
