import { SVGAttributes } from "react";

export const Logo = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 26"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.86936 4.12423C10.5304 -0.704247 17.4696 -0.704245 20.1306 
        4.12423L26.4668 15.6214C29.0379 20.2866 25.663 26 20.3361 26H7.66386C2.33701
        26 -1.03786 20.2866 1.53321 15.6214L7.86936 4.12423Z"
        fill="#3EFF51"
      />
    </svg>
  );
};
