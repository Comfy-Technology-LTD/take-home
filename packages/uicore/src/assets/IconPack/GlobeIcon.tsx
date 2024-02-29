
import { SVGAttributes } from "react"

export const GlobeIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.875 8.5C14.875 12.0208 12.0208 14.875 8.5 14.875M14.875 8.5C14.875 4.97918 12.0208 2.125 8.5 2.125M14.875 8.5H2.125M8.5 14.875C4.97918 14.875 2.125 12.0208 2.125 8.5M8.5 14.875C9.6736 14.875 10.625 12.0208 10.625 8.5C10.625 4.97918 9.6736 2.125 8.5 2.125M8.5 14.875C7.32639 14.875 6.375 12.0208 6.375 8.5C6.375 4.97918 7.32639 2.125 8.5 2.125M2.125 8.5C2.125 4.97918 4.97918 2.125 8.5 2.125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
