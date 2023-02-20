import React from "react";
import Categories from "./categories/categories";
import Joke from "./joke/joke";

import { Container } from "./main.styled";

const Main = () => {
  return (
    <Container>
      <Categories />
      <Joke />
    </Container>
  );
};

export default Main;
