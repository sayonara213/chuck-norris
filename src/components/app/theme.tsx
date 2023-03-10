import { FC, PropsWithChildren } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { normalize } from "../../style-reset/normalize";

import raleway from "../../assets/fonts/raleway.ttf";
export const FONT_SIZE = {
  small: "16px",
  medium: "20px",
  large: "50px",
};
export const FONT_WEIGHT = {
  light: "600",
  bold: "800",
};
export const COLOR = {
  background: "#e7e7e7",
  blue: "#422ED4",
  categories: "#1C1C39",
  white: "#FFFFFF",
};
export const BORDER_RADIUS = {
  small: "20px",
  large: "25px",
};

export const theme = {
  fontSize: FONT_SIZE,
  fontWeight: FONT_WEIGHT,
  borderRadius: BORDER_RADIUS,
  color: COLOR,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'raleway';
    src: url(${raleway})
    format('truetype');
    font-display: swap;
  }
  
  body {
    background: ${COLOR.white};
  }
`;

export const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
