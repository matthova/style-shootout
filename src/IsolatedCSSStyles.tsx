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
`;

export const TitleText = styled("span")`
  ${(p) => p.theme.typography.heading0}
`;

export const InputArea = styled("div")`
  > * {
    margin-top: 16px;
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
`;
