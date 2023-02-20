import React, { useEffect, useState } from "react";
import Button from "../../../button/button";

import { GetCategories } from "../../../../services/services";

import { CategoriesListWrap } from "./categories-list.styled";

const CategoriesList = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await GetCategories();
      setCategories([...categories, "random"]);
    };

    fetchCategories().catch((err) => console.log(err));
  }, []);

  return (
    <CategoriesListWrap>
      {categories.map((category: string) => (
        <Button key={category} category={category} />
      ))}
    </CategoriesListWrap>
  );
};

export default CategoriesList;
