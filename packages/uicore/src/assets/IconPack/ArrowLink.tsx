import { SVGAttributes } from "react"


export const ArrowLink = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.88888 19.4674C9.36182 19.5349 8.91427 19.1594 8.88926 18.6286L8.50495 10.4737C8.47994 9.94292 8.88693 9.45788 9.41399 9.39035L17.5117 8.35273C18.0388 8.2852 18.4864 8.66073 18.5114 9.19151C18.5364 9.7223 18.1294 10.2073 17.6023 10.2749L11.8085 11.0173L19.9978 17.8889C20.3882 18.2164 20.4169 18.825 20.0619 19.248C19.7069 19.6711 19.1026 19.7485 18.7122 19.421L10.523 12.5493L10.7979 18.384C10.8229 18.9148 10.4159 19.3999 9.88888 19.4674Z"
        fill="currentColor"
      />
    </svg>
  );
};
