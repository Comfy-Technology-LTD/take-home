import { SVGAttributes } from "react";

export const ShopCartIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="shopping cart icon"
    >
      <path
        d="M2.5 2.5H4.16667L4.5 4.16667M5.83333 10.8333H14.1667L17.5 4.16667H4.5M5.83333 10.8333L4.5 4.16667M5.83333 10.8333L3.92259 12.7441C3.39762 13.269 3.76942 14.1667 4.51184 14.1667H14.1667M14.1667 14.1667C13.2462 14.1667 12.5 14.9129 12.5 15.8333C12.5 16.7538 13.2462 17.5 14.1667 17.5C15.0871 17.5 15.8333 16.7538 15.8333 15.8333C15.8333 14.9129 15.0871 14.1667 14.1667 14.1667ZM7.5 15.8333C7.5 16.7538 6.75381 17.5 5.83333 17.5C4.91286 17.5 4.16667 16.7538 4.16667 15.8333C4.16667 14.9129 4.91286 14.1667 5.83333 14.1667C6.75381 14.1667 7.5 14.9129 7.5 15.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};