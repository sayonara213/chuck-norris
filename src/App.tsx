import React, { FC } from "react";
import { Theme } from "./constants/theme";
import Header from "./components/header/header";
const App: FC = () => {
  return (
    <Theme>
      <Header />
    </Theme>
  );
};

export default App;
