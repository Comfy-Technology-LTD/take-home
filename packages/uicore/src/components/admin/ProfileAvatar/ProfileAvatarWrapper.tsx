import clsx from "clsx";
import React from "react";
import { size } from ".";

type ProfileAvatarWrapperProps = {
  children?: React.ReactNode;
  size?: size;
  className?: string;
  isNoFile?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const styles = {
  root: "flex items-center justify-center bg-[rgb(247,247,247)] overflow-hidden relative overflow-hidden border border-[color:var(--okw-border-color2)] border-solid",
  cvSmall: "w-[30px] h-[30px] min-w-[30px] rounded-[50%]",
  cSmall: "w-10 h-10 min-w-[40px] rounded-[50%]",
  cMedium: "w-[70px] h-[70px] min-w-[70px] rounded-[50%]",
  cLarge: "w-[110px] h-[110px] min-w-[110px] rounded-[50%]",
  qvSmall: "w-[30px] h-[30px] min-w-[30px] rounded-[8px]",
  qSmall: "w-10 h-10 min-w-[30px] rounded-[8px]",
  qMedium: "w-[70px] h-[70px] min-w-[70px] rounded-2xl",
  qLarge: "w-[110px] h-[110px] min-w-[110px] rounded-[25px]",
  tLarge: "w-full h-[140px] rounded-[25px]",
  tMedium:
    "flex items-center justify-center h-full w-full overflow-hidden relative [mask-image:-webkit-radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]",
  tSmall: "",
  nofile: "shadow-[0px_0px_0px_3px_var(--okw-error-color)]",
};

export const ProfileAvatarWrapper = React.forwardRef<HTMLDivElement, ProfileAvatarWrapperProps>(
  (props, ref) => {
    const { children, size, className, isNoFile, ...rest } = props;

    const classes = clsx([styles.root, size && styles[size], { [styles.nofile]: isNoFile }, className]);

    return (
      <>
        <div className={classes} ref={ref} {...rest}>
          {children}
        </div>
      </>
    );
  }
);
