import React from "react";
import { UploadIcon } from "../../../assets/IconPack/UploadIcon";
import { Spinner } from "../../shared/Spinner";

type ProfileOverlaysProps = {
  overlay?: boolean;
  upload?: boolean;
  handleDelete?: () => void;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isCompressing?: boolean;
};
const ProfileOverlays = ({
  overlay,
  upload,
  handleDelete,
  isCompressing,
  onFileChange,
}: ProfileOverlaysProps) => {
  return (
    <>
      {overlay ? (
        <div
          className={
            "absolute w-full h-full opacity-80 transition-opacity duration-[0.2s] ease-[ease] delay-[0s] bg-[rgba(0,0,0,0.473)] text-[color:var(--okw-light-text-color1)] flex items-center justify-center z-[3] inset-0"
          }
        >
          {upload ? (
            <div
              className={
                "text-[calc(var(--okw-font-size-10)_*_3)] w-full h-full flex items-center justify-center relative overflow-hidden"
              }
            >
              {isCompressing ? (
                <>
                  <Spinner />
                </>
              ) : (
                <>
                  <input
                    max={1}
                    required
                    type="file"
                    name=""
                    id=""
                    onChange={onFileChange}
                    multiple
                    onClick={(event) => {
                      const target = event.target as HTMLInputElement;
                      target.value = "";
                    }}
                  />
                  <UploadIcon />
                </>
              )}
            </div>
          ) : (
            <div
              onClick={handleDelete}
              className={
                "w-full h-full text-[color:var(--okw-light-text-color1)] flex items-center justify-center cursor-pointer"
              }
            >
              Delete
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ProfileOverlays;
