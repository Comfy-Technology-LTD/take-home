import React, { ComponentProps } from 'react'
import { useLocation } from 'react-router-dom'

export type LayoutProps =  {
  children: React.ReactNode
} & ComponentProps<"div">

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  return (
    <>

      {
        location.pathname === "/login" || location.pathname === "/signup" ?
          <div className={"max-w-[1660px] flex flex-col w-full h-screen overflow-y-auto items-center overflow-x-hidden mx-auto my-0"}>
            <>
              {children}
            </>
            <>
              {/* <span className={styles.logoFloat}>

                <Logo />
              </span> : null */}

            </>
          </div> :
          <div className={"max-w-[1660px] flex flex-col w-full h-full overflow-y-auto items-center overflow-x-hidden [text-wrap:nowrap] whitespace-nowrap mx-auto my-0 pt-[100px] md:pt-[120px] "}>
            {children}
          </div>
      }
    </>
  )
}

Layout.displayName = "Layout"