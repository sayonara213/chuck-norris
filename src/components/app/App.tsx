import React, { FC } from "react";

import { Theme } from "./theme";
import Header from "../header/header";
import Main from "../main/main";
const App: FC = () => {
  return (
    <Theme>
      <Header />
      <Main />
    </Theme>
  );
};

export default App;
