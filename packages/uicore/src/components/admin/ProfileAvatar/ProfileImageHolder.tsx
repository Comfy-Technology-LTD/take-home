import clsx from "clsx";
import { useState } from "react";
import { size } from ".";
import { AvartarHolder } from "../../../assets/ArtIconPack/AvartarHolder";

type ProfileAvatarProps = {
  size: size;
  alt?: string;
  src?: string;
  className?: string;
  aFile?: File;
};

const avatarStyles = {
  avatar: "w-full h-full absolute z-[1] grid place-content-center",

  "avatar-cvSmall": "text-[calc(var(--okw-font-size-10)_*_2)]",
  "avatar-qvSmall": "text-[calc(var(--okw-font-size-10)_*_2)]",
  "avatar-tvSmall": "text-[calc(var(--okw-font-size-10)_*_2)]",

  "avatar-cSmall": "text-[calc(var(--okw-font-size-10)_*_2)]",
  "avatar-qSmall": "text-[calc(var(--okw-font-size-10)_*_2)]",
  "avatar-tSmall": "text-[calc(var(--okw-font-size-10)_*_2)]",

  "avatar-cMedium": "text-[calc(var(--okw-font-size-10)_*_3)]",
  "avatar-qMedium": "text-[calc(var(--okw-font-size-10)_*_3)]",
  "avatar-tMedium": "text-[calc(var(--okw-font-size-10)_*_3)]",

  "avatar-cLarge": "text-[calc(var(--okw-font-size-10)_*_4)]",
  "avatar-qLarge": "text-[calc(var(--okw-font-size-10)_*_4)]",
  "avatar-tLarge": "text-[calc(var(--okw-font-size-10)_*_4)]",
};

export const ProfileImageHolder = ({ size, alt, src, className, aFile }: ProfileAvatarProps) => {
  const [imageError, setimageError] = useState(false);

  const classes = clsx([avatarStyles.avatar, avatarStyles[`avatar-${size}`], className]);
  return (
    <>
      <div
        className={
          "flex items-center justify-center h-full w-full overflow-hidden relative [mask-image:-webkit-radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
        }
      >
        <div className={classes}>
          <AvartarHolder />
        </div>
        {src && !imageError && !aFile ? (
          <img
            src={src}
            alt={alt}
            className={"w-full h-full object-cover object-[top_center] z-[2]"}
            onError={(event) => {
              setimageError(true);
              const target = event.target as HTMLImageElement;
              target.style.visibility = "hidden";
            }}
            onLoad={(event) => {
              const target = event.target as HTMLImageElement;
              target.style.visibility = "visible";
            }}
          />
        ) : (
          <img
            src={aFile && window.URL.createObjectURL(aFile)}
            alt={""}
            className={"w-full h-full object-cover object-[top_center] z-[2]"}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.style.visibility = "hidden";
            }}
            onLoad={(event) => {
              const target = event.target as HTMLImageElement;
              target.style.visibility = "visible";
            }}
          />
        )}
      </div>
    </>
  );
};
