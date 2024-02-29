import React, { ComponentProps } from 'react'

export type FullSidesLayoutProps = {
  children: React.ReactNode
} & ComponentProps<"div">

export const FullSidesLayout = ({ children, ...props }: FullSidesLayoutProps) => {
  return (
    <>
      <div className={"flex w-full h-full p-[15px] md:p-2.5 "} {...props} >
        {children}
      </div>
    </>
  )
}

FullSidesLayout.displayName = 'FullSidesLayout'
