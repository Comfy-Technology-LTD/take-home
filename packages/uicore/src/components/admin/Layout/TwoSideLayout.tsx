import React, { ComponentProps } from 'react'

export type TwoSideLayoutProps = {
  children: React.ReactNode
} & ComponentProps<"div">

export const TwoSideLayout = ({ children }: TwoSideLayoutProps) => {
  return (
    <div className={"flex w-full h-full gap-x-5 lg:flex-col md:flex-col gap-[30px] pt-[5px] pb-[150px] px-[5px] "}>
      {children}
    </div>
  )
}

TwoSideLayout.displayName = "TwoSideLayout"