import clsx from "clsx"
import  { ComponentProps } from "react"

export type SpinnerProps = {
  size?: "small" | "medium" | "large"
} & ComponentProps<'div'>

let styles = {
  root: `bg-transparent animate-[spin_500ms_linear_infinite] z-[4] rounded-rd border-[3px] border-solid border-[rgba(128,128,128,0.39)]`,
  small: "w-5 h-5 min-w-[20px] min-h-[20px]",
  medium: "w-[30px] h-[30px] min-w-[30px] min-h-[30px]",
  large: "w-[45px] h-[45px] min-w-[45px] min-h-[45px]",
}

export const Spinner = ({ size = 'small', ...props }: SpinnerProps) => {

  const classes = clsx([styles.root, styles[size]])
  
  return (
    <>
      <div className={classes} {...props} >
        
      </div>
    </>
  )
}
Spinner.displayName = 'Spinner'