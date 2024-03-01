import clsx from "clsx";
import React, { ComponentProps } from "react";
import { NavLink, useLocation } from "react-router-dom";

export type SideNavigationProps = {
  allRoutes?: {
    path: string;
    name: string;
    icon: React.ReactNode;
  }[];
} & ComponentProps<"div">;

export const SideNavigation = ({ allRoutes }: SideNavigationProps) => {
  const { pathname } = useLocation();

  const linkClasses = (path: string) => {
    return clsx([
      "w-full flex gap-5 no-underline items-center px-[9px] py-2 first:border-[none]",
      pathname === path && "text-secondary text-[bold]",
    ]);
  };

  return (
    <>
      <div className={"w-3/12 flex flex-col h-full min-w-[240px] max-w-[260px]"}>
        <div className={"w-full flex flex-col items-center border border-gray rounded-lg border-solid"}>
          {allRoutes?.map((route) => {
            return (
              <NavLink key={route.path} to={route.path} className={linkClasses(route.path)}>
                <span
                  className={
                    "w-[35px] h-[35px] flex justify-center items-center iconCoverBgColor deepTextColor text-[calc(var(--okw-font-size-20)_*_1.2)] rounded-rd"
                  }
                >
                  {route.icon}
                </span>
                <span
                  className={
                    "text-[length:var(--okw-font-size-14)] text-[color:var(--okw-dark-text-color3)] font-medium my-2.5"
                  }
                >
                  {route.name}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

SideNavigation.displayName = "SideNavigation";
