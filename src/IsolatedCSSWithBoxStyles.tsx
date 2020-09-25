import { Box, Text, Input as InputDS, Stack, styled } from "./design-system";

export const Container = styled(Box).attrs({
  padding: { mobile: 32, tablet: 64 },
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

export const TitleArea = styled("h1")`
  display: flex;
`;

export const TitleBoldText = styled(Text).attrs({
  as: "h1",
  typography: {
    mobile: "headingBold0",
    tablet: "headingBold2",
    desktop: "headingBold5",
  },
})``;

export const TitleText = styled(Text).attrs({
  as: "span",
  typography: {
    mobile: "heading0",
    tablet: "heading2",
    desktop: "heading5",
  },
})``;

export const InputArea = styled(Stack).attrs({
  direction: "horizontal",
  space: 32,
})`
  display: flex;
  flex-wrap: wrap;
  > * {
    ${/* hard to get responsive child spacing without media queries */ ""}
    margin-top: 32px;
  }
`;

export const Input = styled(InputDS)`
  width: 200px;
`;

export const Footer = styled(Text).attrs({
  typography: { mobile: "paragraph0", tablet: "paragraph1" },
})`
  margin-top: auto;
`;
