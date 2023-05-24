"use client";
import { FC, useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}
interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: FC<ImageUploadProps> = ({
  onChange,
  value,
}): JSX.Element => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="t2ps8na8"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
                      border-2
                      border-dashed
                      border-neutral-300
                      cursor-pointer
                      flex
                      flex-col
                      gap-4
                      hover:opacity-70
                      items-center
                      justify-center
                      p-20
                      relative
                      text-neutral-600
                      transition
                      dark:border-neutral-700
                      "
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">
                Clip to upload
            </div>
            {value && (
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        alt="upload"
                        fill
                        style={{objectFit:'cover'}}
                        src={value}
                    />
                </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export { ImageUpload };
