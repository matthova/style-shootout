import React from "react";
import { FlattenInterpolation, ThemeProps } from "styled-components";
import { width, ResponsiveValue, WidthProps } from "styled-system";
import { BreakpointObject, css, styled, Theme } from "./theme";

type ButtonSizes = "small" | "medium" | "large";

export type ButtonStyleProps = {
  size: ResponsiveValue<ButtonSizes>;
  variant: "primary";
  theme: Theme;
} & WidthProps<Theme, number | string>;

const buttonSizes: Record<
  ButtonSizes,
  FlattenInterpolation<ThemeProps<Theme>>
> = {
  large: css`
    height: 64px;
    padding: 8px 16px;
    border-radius: 4px;
    ${(p) => p.theme.typography.heading1}
  `,
  medium: css`
    height: 48px;
    padding: 8px 16px;
    border-radius: 4px;
    ${(p) => p.theme.typography.heading1}
  `,
  small: css`
    height: 32px;
    padding: 8px 16px;
    border-radius: 4px;
    ${(p) => p.theme.typography.heading0}
  `,
};
const sizeStyles = ({ size, theme }: ButtonStyleProps) => {
  if (typeof size === "string") {
    return buttonSizes[size];
  }

  return Object.keys(theme.breakpoints).map((breakpointKey) => {
    // eslint-disable-next-line
    // @ts-ignore
    if (size[breakpointKey] == null) {
      return "";
    }
    // eslint-disable-next-line
    // @ts-ignore
    const buttonSizeStyle = buttonSizes[size[breakpointKey]];
    return css`
      @media screen and (min-width: ${theme.breakpoints[
          breakpointKey as keyof BreakpointObject
        ]}) {
        ${buttonSizeStyle}
      }
    `;
  });
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
  display: flex;
  justify-content: center;
  align-items: center;
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
