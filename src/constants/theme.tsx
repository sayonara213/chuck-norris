import {FC, PropsWithChildren} from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { normalize } from '../style-reset/normalize'

export const FONT_SIZE = {
    small: '16px',
    medium: '20px',
    large: '50px',
}
export const FONT_WEIGHT = {
    light: '600',
    bold: '800',
}
export const COLOR = {
    background: '#E5E5E5',
    blue: '#422ED4',
    categories: '#1C1C39',
    white: '#FFFFFF',
}
export const BORDER_RADIUS = {
    small: '20px',
    large: '25px',
}

export const theme = {
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    borderRadius: BORDER_RADIUS,
    color: COLOR,
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background: ${COLOR.background};
  }
`

export const Theme: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}
