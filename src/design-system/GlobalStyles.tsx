import { createGlobalStyle } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    ${(p) => p.theme.typography.paragraph0}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    padding: 0;
    margin: 0;
    background: ${(p) => p.theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;
