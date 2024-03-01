import React from "react";

export interface OverviewInsightCardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const OverviewInsightCardWrapper = ({ children, ...props }: OverviewInsightCardWrapperProps) => {
  return (
    <>
      <div {...props} className={"w-full flex gap-5 flex-wrap sm:w-full  sm:gap-2.5 sm:flex-wrap"}>
        {children}
      </div>
    </>
  );
};
