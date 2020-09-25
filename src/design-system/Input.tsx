import { styled } from "./theme";

export const Input = styled("input")`
  ${(p) => p.theme.typography.paragraph0}
  height: 48px;
  padding: 12px;
`;
