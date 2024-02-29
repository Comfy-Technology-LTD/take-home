import { SVGAttributes } from "react"


export const PinPoint = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 245 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1933_1333)">
        <g filter="url(#filter0_d_1933_1333)">
          <ellipse
            cx="123.361"
            cy="211.977"
            rx="9.40911"
            ry="13.5079"
            transform="rotate(-66.7424 123.361 211.977)"
            fill="#D9D9D9"
          />
        </g>
        <path
          d="M122.5 222.667C120.057 222.667 117.714 221.7 115.987 219.98C114.261 218.261 113.292 215.93 113.292 213.5V91.5C113.292 89.0702 114.261 86.739 115.987 85.0196C117.714 83.3001 120.057 82.3333 122.5 82.3333C124.944 82.3333 127.286 83.3001 129.013 85.0196C130.739 86.739 131.708 89.0702 131.708 91.5V213.5C131.708 215.93 130.739 218.261 129.013 219.98C127.286 221.7 124.944 222.667 122.5 222.667Z"
          fill="#EF3838"
          stroke="#E0E0E0"
          strokeWidth="2"
        />
        <path
          d="M162.333 61C162.333 82.9035 144.503 100.667 122.5 100.667C100.497 100.667 82.6667 82.9035 82.6667 61C82.6667 39.0966 100.497 21.3333 122.5 21.3333C144.503 21.3333 162.333 39.0966 162.333 61Z"
          fill="#5CB352"
          stroke="#E0E0E0"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1933_1333"
          x="77.8033"
          y="173.218"
          width="91.1158"
          height="85.5181"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1933_1333" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="12.3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1933_1333" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1933_1333" result="shape" />
        </filter>
        <clipPath id="clip0_1933_1333">
          <rect width="245" height="244" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
