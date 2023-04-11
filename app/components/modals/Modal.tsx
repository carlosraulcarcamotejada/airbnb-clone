"use client";
import { FC, ReactElement, useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

type props = {
  actionLabel: string;
  body?: ReactElement;
  footer?: ReactElement;
  isDisable?: boolean;
  isOpen?: boolean;
  onClose: (() => void )| undefined;
  onSumbit:( () => void ) | undefined;
  secondaryAction?: () => void;
  secondaryLabel?: () => void;
  title?: string;
};

const Modal: FC<props> = ({
  actionLabel,
  isOpen,
  onClose,
  onSumbit,
  body,
  footer,
  isDisable,
  secondaryAction,
  secondaryLabel,
  title,
}): JSX.Element => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
    setTimeout(() => {
      onClose && onClose();
    }, 300);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (isDisable) return;
    setShowModal(false);
  }, [isDisable, onclose]);

  const handleSubmit = useCallback(() => {
    if (isDisable) return;
    onSumbit && onSumbit();
  }, [isDisable, onSumbit]);

  const handleSecondaryAction = useCallback(() => {
    if (isDisable || !secondaryAction) return;
    secondaryAction();
  }, [isDisable, secondaryAction]);

  if (!isOpen) return <></>;

  return (
    <div
      className="
                flex
                justify-center
                items-center
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800/70
                "
    >
      <div
        className="
                    relative
                    w-full
                    md:w-4/6
                    lg:w-3/6
                    xl:w-2/5
                    my-6
                    mx-auto
                    h-full
                    md:h-auto
                "
      >
        {/*CONTENT*/}
        <div
          className={`
                        translate
                        duration-300
                        h-full
                        ${showModal ? "translate-y-0" : "translate-y-full"}
                        ${showModal ? "opacity-100" : "opacity-0"}
                    `}
        >
          <div
            className="
                        translate
                        h-full
                        md:h-auto
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none
                        "
          >
            {/*HEADER*/}
            <div
              className="
                        flex
                        items-center
                        justify-center
                        p-6
                        rounded-t
                        relative
                        border-b
                        "
            >
              <button
                onClick={() => {
                  handleClose();
                }}
                className="
                            p-1
                            border-0
                            hover:opacity-70
                            transition
                            absolute
                            left-9
                            "
                type="button"
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/*BODY*/}
            <div className="relative p-6 flex-auto">{body}</div>
            <div className="flex flex-col gap-2 p-6">
              {/*FOOTER*/}
              <div
                className="
                            flex
                            items-center
                            gap-4
                            w-full
                            "
              >
                <Button label="My button" isDisable={false} onClick={()=>{}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
