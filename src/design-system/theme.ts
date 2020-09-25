import * as baseStyled from "styled-components";

export const {
  css,
  createGlobalStyle,
  keyframes,
  default: styled,
  ThemeProvider,
  ThemeContext,
} = baseStyled as baseStyled.ThemedStyledComponentsModule<Theme>;

const hues = {
  shade1100: "#ffffff",
  shade1000: "#f2f2f2",
  shade0900: "#e6e6e6",
  shade0800: "#cccccc",
  shade0700: "#b3b3b3",
  shade0600: "#999999",
  shade0500: "#808080",
  shade0400: "#666666",
  shade0300: "#4d4d4d",
  shade0200: "#333333",
  shade0100: "#1a1a1a",
  shade0000: "#000000",
  violet: "#8B5EF4",
  rose: "#FF78A6",
  peach: "#F6B67F",
  lime: "#59F5BD",
};

const colors = {
  primary: hues.violet,
  onPrimary: hues.shade0000,
  background: hues.shade0100,
  onBackground: hues.shade1100,
  surface: hues.shade0300,
  onSurface: hues.shade1100,
};

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;";

const typography = {
  heading0: css`
    font-family: ${fontFamily};
    font-size: 50px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 2px;
  `,
  heading1: css`
    font-family: ${fontFamily};
    font-size: 46px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 1.84px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  heading2: css`
    font-family: ${fontFamily};
    font-size: 42px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 1.68px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  heading3: css`
    font-family: ${fontFamily};
    font-size: 38px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 1.52px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  heading4: css`
    font-family: ${fontFamily};
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 1.36px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  heading5: css`
    font-family: ${fontFamily};
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 1.2px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  heading6: css`
    font-family: ${fontFamily};
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1.04px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  headingBold0: css`
    font-family: ${fontFamily};
    font-size: 50px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 2px;
  `,
  headingBold1: css`
    font-family: ${fontFamily};
    font-size: 46px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 1.84px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  headingBold2: css`
    font-family: ${fontFamily};
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 1.68px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  headingBold3: css`
    font-family: ${fontFamily};
    font-size: 38px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.52px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  headingBold4: css`
    font-family: ${fontFamily};
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 1.36px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  headingBold5: css`
    font-family: ${fontFamily};
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.2px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  headingBold6: css`
    font-family: ${fontFamily};
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 1.04px;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  paragraph0: css`
    font-family: ${fontFamily};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  paragraph1: css`
    font-family: ${fontFamily};
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  paragraph2: css`
    font-family: ${fontFamily};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  paragraphBold0: css`
    font-family: ${fontFamily};
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  paragraphBold1: css`
    font-family: ${fontFamily};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  paragraphBold2: css`
    font-family: ${fontFamily};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  label0: css`
    font-family: ${fontFamily};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
  label1: css`
    font-family: ${fontFamily};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
    color: ${(p) => p.theme.colors.onBackground};
  `,
};

export type BreakpointObject = Record<
  "mobile" | "tablet" | "desktop",
  string | number
>;

export const breakpoints: BreakpointObject = {
  mobile: "0px",
  tablet: "768px",
  desktop: "1024px",
};

// using blank object for space to prevent using default styled-system space value
const space = {};

const zIndices = {
  body: 0,
  bodyLift: 1000,
  modal: 2000,
  modalLift: 3000,
};

export const theme = {
  breakpoints,
  colors,
  space,
  typography,
  zIndices,
};

// have to manually declare each key/val of theme type to prevent circular
// dependency in themed styled-components declaration
export type Theme = {
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  space: typeof space;
  typography: typeof typography;
  zIndices: typeof zIndices;
};
