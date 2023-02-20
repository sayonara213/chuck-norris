import React, { FC } from "react";
import { Theme } from "./constants/theme";
import Header from "./components/header/header";
import Main from "./components/main/main";
const App: FC = () => {
  return (
    <Theme>
      <Header />
      <Main />
    </Theme>
  );
};

export default App;
