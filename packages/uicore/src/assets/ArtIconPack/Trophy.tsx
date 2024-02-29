import { SVGAttributes } from "react";

export const Trophy = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.9167 24.32C37.7917 23.92 40.0834 22.84 41.7084 21.04C44.9584 17.4 44.375 12.32 44.375 12.08L44.2917 11.4H38.2917C38.25 10.04 38.125 8.67999 37.875 7.39999H12.0834C11.875 8.67999 11.75 10.04 11.6667 11.4H5.70837L5.62504 12.08C5.58337 12.28 5.0417 17.4 8.2917 21.04C9.9167 22.84 12.2084 23.92 15.0834 24.32C17.1667 27.84 19.875 30.52 22.125 31.88V35.2H15.25C14.25 35.2 13.4584 35.96 13.4584 36.92V40.6H36.625V36.92C36.625 35.96 35.8334 35.2 34.8334 35.2H27.875V31.92C30.125 30.52 32.8334 27.84 34.9167 24.32ZM40.4584 20.04C39.3334 21.28 37.7917 22.12 35.875 22.56C37.2917 19.72 38.25 16.44 38.3334 12.96H42.7917C42.8334 14.4 42.625 17.64 40.4584 20.04ZM9.5417 20.04C7.4167 17.64 7.20837 14.4 7.20837 13H11.6667C11.75 16.48 12.7084 19.76 14.125 22.6C12.2084 22.12 10.6667 21.28 9.5417 20.04Z"
        fill="#FFC54D"
      />
      <path
        d="M25.2087 13.84L26.417 16.16C26.4587 16.24 26.5003 16.28 26.6253 16.28L29.292 16.64C29.5003 16.68 29.542 16.88 29.417 17.04L27.4587 18.8C27.3753 18.88 27.3753 18.92 27.3753 19L27.8337 21.56C27.8753 21.76 27.667 21.88 27.5003 21.8L25.1253 20.6C25.042 20.56 24.9587 20.56 24.917 20.6L22.542 21.8C22.3753 21.88 22.167 21.72 22.2087 21.56L22.667 19C22.667 18.92 22.667 18.84 22.5837 18.8L20.667 17C20.542 16.88 20.5837 16.64 20.792 16.6L23.4587 16.24C23.542 16.24 23.5837 16.16 23.667 16.12L24.8753 13.8C24.8753 13.64 25.1253 13.64 25.2087 13.84Z"
        fill="#EF3838"
      />
      <path d="M7.95801 33.56L9.74967 31.44L11.5413 33.56V11.4H7.95801V33.56Z" fill="#5CB352" />
      <path d="M38.458 11.4V33.56L40.2497 31.44L42.0413 33.56V11.4H38.458Z" fill="#5CB352" />
    </svg>
  );
};
