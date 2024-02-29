import clsx from "clsx";
import React, { ComponentProps } from "react";

export type InputProps = {
  noBorder?: boolean;
  isFullwidth?: boolean;
  theme?: "themeBlack" | "themePurple" | "themeGreen";
} & ComponentProps<"input">;

const styles = {
  root: "rounded",
  noBorder: "border-none",
  isFullwidth: "",
  themeBlack: "",
  themePurple: "",
  themeGreen: "",
  small: "",
  large: "",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { noBorder, isFullwidth, className, theme = "themeBlack", ...rest } = props;

  const classes = clsx([
    styles[theme],
    styles.root,
    {
      [styles.noBorder]: noBorder,
      [styles.isFullwidth]: isFullwidth,
    },
    className,
  ]);

  return <input className={classes} {...rest} ref={ref} />;
});

Input.displayName = "Input";
