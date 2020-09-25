import React from "react";
import { width, ResponsiveValue, WidthProps } from "styled-system";
import { css, styled, Theme } from "./theme";

type ButtonSizes = "small" | "medium" | "large";

export type ButtonStyleProps = {
  size: ResponsiveValue<ButtonSizes>;
  variant: "primary";
  theme: Theme;
} & WidthProps<Theme, number | string>;

const sizeStyles = ({ size }: ButtonStyleProps) => {
  switch (size) {
    case "small":
      return css`
        height: 32px;
        padding: 8px 16px;
        border-radius: 4px;
        ${(p) => p.theme.typography.heading0}
      `;
    case "medium":
      return css`
        height: 48px;
        padding: 8px 16px;
        border-radius: 4px;
        ${(p) => p.theme.typography.heading1}
      `;
    case "large":
      return css`
        height: 64px;
        padding: 8px 16px;
        border-radius: 4px;
        ${(p) => p.theme.typography.heading1}
      `;
    default:
      return "";
  }
};

const variantStyles = ({ variant }: ButtonStyleProps) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${(p) => p.theme.colors.primary};
        color: ${(p) => p.theme.colors.onPrimary};
      `;
    default:
      return "";
  }
};

const ButtonStyles = styled("button")<ButtonStyleProps>`
  border: none;
  cursor: pointer;
  ${width}
  ${sizeStyles}
  ${variantStyles}
`;

type ButtonProps = React.FC<
  Omit<ButtonStyleProps, "theme"> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button: ButtonProps = ({ children, ...rest }) => (
  <ButtonStyles {...rest}>{children}</ButtonStyles>
);
Button.defaultProps = {
  type: "button",
};
