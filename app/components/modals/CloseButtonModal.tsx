"use client";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";

interface CloseButtonModalProps {
  left?: number;
  onClose: () => void;
  top?: number;
}

const CloseButtonModal: FC<CloseButtonModalProps> = ({
  left,
  onClose,
  top,
}): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClose}
      className={`
                  ${left ? "left-" + left : ""}
                  ${top ? "top-" + top : ""}
                  absolute 
                  active:scale-90 
                  focus:outline-none 
                  hover:opacity-70 
                  p-2 
                  rounded-full
                  transition 
                hover:bg-neutral-100 
                  `}
    >
      <IoMdClose size={18} />
    </button>
  );
};

export { CloseButtonModal };
