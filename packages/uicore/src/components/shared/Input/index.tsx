import clsx from "clsx";
import React, { ComponentProps } from "react";

export type InputProps = {
  noBorder?: boolean;
  isFullwidth?: boolean;
  theme?: "themeBlack" | "themePurple" | "themeGreen";
} & ComponentProps<"input">;

const styles = {
  root: `text-sm font-normal [outline:none] box-border border border-gray 
          bg-[rgba(255,255,255,0.47)] select-text appearance-none text-base px-[18px] py-[15px] rounded-[50px]
          border-solid focus:border focus:border-[color:var(--okw-button-accent-color)]
          focus:shadow-[0px_0px_0px_3px_var(--okw-button-light-accent-color2)] focus:border-solid;`,
  noBorder: "border-none",
  isFullwidth: "w-full",
  themeBlack: `[--okw-button-light-accent-color2:--okw-black-light-accent-color2] [--okw-button-accent-color:--okw-black-accent-color]`,
  themePurple: `[--okw-button-light-accent-color2:--okw-purple-light-accent-color2] [--okw-button-accent-color:--okw-purple-accent-color]`,
  themeGreen: `[--okw-button-light-accent-color2:--okw-green-light-accent-color2] [--okw-button-accent-color:--okw-green-accent-color]`,
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
