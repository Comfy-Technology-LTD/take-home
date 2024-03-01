import clsx from "clsx";
import React, { ComponentProps } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SwitchHorinIcon } from "../../../../entry/shared";
import { Button } from "../../../shared/Button";
import { Logo } from "../.././../../assets/ArtIconPack";
import { ProfileAvatar } from "../../ProfileAvatar";

export type TopNavigationProps = {
  allRoutes?: {
    path: string;
    name: string;
    icon: React.ReactNode;
  }[];
  userDetails: {
    photo: string;
    username: string;
    phoneNumber: string;
  };
  hasSubRoute?: boolean;
  handleSubRoute: () => void;
} & ComponentProps<"div">;

export const TopNavigation = ({
  allRoutes,
  userDetails,
  hasSubRoute,
  handleSubRoute,
}: TopNavigationProps) => {
  const { pathname } = useLocation();

  const linkClasses = (path: string) => {
    return clsx([
      "w-fit relative h-full flex items-center gap-3 no-underline mt-[7px]",
      pathname === path && "",
    ]);
  };
  return (
    <>
      <div
        className={
          "flex w-full border-b-gray h-max bg-primary/90 flex-col fixed backdrop-blur-[15px] z-[100] border-b border-solid;"
        }
      >
        <div className={"flex w-full h-full justify-between items-center px-5 py-2"}>
          <div className={"flex gap-[30px] items-center"}>
            <Logo className="text-4xl" />
            <span
              className={"whitespace-nowrap font-extrabold text-[length:var(--okw-font-size-20)] text-bGreen"}
            >
              Broinsure
            </span>
          </div>
          <div className={"flex gap-2.5 items-center"}>
            <ProfileAvatar size="cvSmall" src={userDetails?.photo} alt="avatar" />
          </div>
        </div>
        <div
          className={
            "flex w-full gap-[15px] items-center h-12 overflow-x-auto overflow-y-hidden pl-[30px] pr-0 py-0"
          }
        >
          {pathname !== "/" && (
            <div className={linkClasses(pathname)}>
              <Button size="small" onClick={handleSubRoute}>
                <SwitchHorinIcon
                  style={{
                    fontSize: "22px",
                    rotate: hasSubRoute ? "-1" : "1",
                  }}
                />
                {/* Open */}
              </Button>
            </div>
          )}

          <div
            className={
              "flex w-full h-full gap-14 items-center overflow-x-auto overflow-y-hidden pl-0 pr-5 py-0"
            }
          >
            {allRoutes?.map((route, index) => {
              return (
                <NavLink key={index} to={route.path} className={linkClasses(route.path)}>
                  <span
                    className={
                      "text-lightText text-[calc(var(--okw-font-size-10)*2.1)] flex items-center pl-1"
                    }
                  >
                    {route.icon}
                  </span>
                  <span className={"text-[length:var(--okw-font-size-14)] font-medium text-lightText pr-1"}>
                    {route.name}
                  </span>
                  {pathname === route.path && (
                    <span className={"absolute h-1 w-full bg-secondary rounded-lg bottom-[3px]"}></span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

TopNavigation.displayName = "TopNavigation";
