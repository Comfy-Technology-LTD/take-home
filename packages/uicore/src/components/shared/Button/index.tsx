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
  themeBlack: `[--okw-button-light-accent-color2:--okw-black-light-accent-color2] [--okw-button-accent-color:--okw-black-accent-color]`,
  themePurple: `[--okw-button-light-accent-color2:--okw-purple-light-accent-color2] [--okw-button-accent-color:--okw-purple-accent-color]`,
  themeGreen: `[--okw-button-light-accent-color2:--okw-green-light-accent-color2] [--okw-button-accent-color:--okw-green-accent-color]`,

  aroot: `rounded-lg overflow-hidden flex items-center justify-center bg-[color:--okw-button-accent-color] 
          text-lightText text-base border [outline:none] text-center font-semibold relative min-w-max w-fit px-[18px]
          py-[15px] border-solid active:border active:border-[color:--okw-light-accent-color1]
          active:shadow-[0px_0px_0px_3px_var(--okw-button-light-accent-color2)]
          active:border-solid disabled:after:absolute disabled:after:bg-[rgba(44,44,44,0.756]
          disabled:after:w-full disabled:after:h-full disabled:after:content-[""] disabled:after:cursor-not-allowed
          disabled:after:inset-0`,
  
  noBorder: `border-none`,
  isFullwidth: "w-full",
  responsive: "",
  isCircle: "rounded-rd p-0",
 
  small: "py-{5} py-{15}",

  large: "",
  outlined: `bg-transparent border border-[color:--okw-button-accent-color] text-arktText 
              border-solid active:border active:border-[color:--okw-button-accent-color]
              active:shadow-[0px_0px_0px_3px_--okw-button-light-accent-color2]
              active:border-solid`,
  
  primary: "",
  secondary: `bg-[color:var(--okw-background-light-color1)] text-[color:var(--okw-accent-text-color1)] 
              active:border active:border-[color:var(--okw-button-accent-color)]
              active:shadow-[0px_0px_0px_3px_var(--okw-button-light-accent-color2)]
              active:border-solid`,
  
  secondaryOutlined: `bg-transparent border border-[color:--okw-dark-border-color2] 
              text-[color:--okw-dark-text-color1] border-solid active:border active:border-[color:--okw-button-accent-color]
              active:shadow-[0px_0px_0px_3px_--okw-button-light-accent-color2]`,
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
