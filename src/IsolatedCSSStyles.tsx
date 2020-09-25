import { Input as InputDS, styled } from "./design-system";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 32px;
  height: 100%;

  @media only screen and (min-width: 768px) {
    padding: 64px;
  }
`;

export const TitleArea = styled("h1")`
  display: flex;
`;

export const TitleBoldText = styled("h1")`
  ${(p) => p.theme.typography.headingBold0}
  @media only screen and (min-width: 768px) {
    ${(p) => p.theme.typography.headingBold2}
  }
  @media only screen and (min-width: 1024px) {
    ${(p) => p.theme.typography.headingBold5}
  }
`;

export const TitleText = styled("span")`
  ${(p) => p.theme.typography.heading0}
  @media only screen and (min-width: 768px) {
    ${(p) => p.theme.typography.heading2}
  }
  @media only screen and (min-width: 1024px) {
    ${(p) => p.theme.typography.heading5}
  }
`;

export const InputArea = styled("div")`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-top: 16px;
    @media only screen and (min-width: 768px) {
      margin-top: 32px;
    }

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

export const Input = styled(InputDS)`
  width: 200px;
`;

export const Footer = styled("div")`
  margin-top: auto;
  ${(p) => p.theme.typography.paragraph0}
`;
