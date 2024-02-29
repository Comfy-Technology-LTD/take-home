import clsx from "clsx";
import React, { ComponentProps } from "react";

export type ButtonProps = {
  isFullwidth?: boolean;
  isCircle?: boolean;
  size?: "small" | "large";
  variants?: "outlined" | "primary" | "secondary" | "secondaryOutlined";
  responsive?: boolean;
  theme?: "themeBlack" | "themePurple" | "themeGreen";
  noBorder?: boolean;
} & ComponentProps<"button">;

const styles = {
  aroot: "rounded",
  noBorder: "border-none",
  isFullwidth: "",
  responsive: "",
  isCircle: "",
  themeBlack: "",
  themePurple: "",
  themeGreen: "",
  small: "",
  large: "",
  outlined: "",
  primary: "",
  secondary: "",
  secondaryOutlined: "",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    noBorder,
    isFullwidth,
    responsive,
    isCircle,
    size = "large",
    variants = "primary",
    theme = "themeBlack",
    ...rest
  } = props;

  const classes = clsx([
    styles.aroot,
    styles[theme],
    {
      [styles.noBorder]: noBorder,
      [styles.isFullwidth]: isFullwidth,
      [styles.responsive]: responsive,
      [styles.isCircle]: isCircle,
    },
    styles[size],
    styles[variants],
    className,
  ]);

  return (
    <>
      <button className={classes} {...rest} ref={ref}>
        {children}
      </button>
    </>
  );
});

Button.displayName = "Button";
