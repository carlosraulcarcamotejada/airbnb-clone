"use client";
import { FC, ReactElement, useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

type props = {
  actionLabel: string;
  body?: ReactElement;
  footer?: ReactElement;
  disable?: boolean;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  title?: string;
};

const Modal: FC<props> = ({
  actionLabel,
  isOpen,
  onClose,
  onSubmit,
  body,
  footer,
  disable,
  secondaryAction,
  secondaryActionLabel,
  title,
}): JSX.Element => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) return;
    onSubmit();
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) return;
    secondaryAction();
  }, [disable, secondaryAction]);

  if (!isOpen) return <></>;

  return (
    <div
      id="main-modal"
      className="
                bg-neutral-800/70
                fixed
                flex
                focus:outline-none
                inset-0
                items-center
                justify-center
                outline-none
                overflow-x-hidden
                overflow-y-auto
                z-50
                "
    >
      <div
        className="
                  h-full
                  lg:w-3/6
                  md:h-auto
                  md:w-4/6
                  mx-auto
                  my-6
                  relative
                  w-full
                  xl:w-2/5
                  "
      >
        {/*CONTENT*/}
        <div
          className={`
                      duration-300
                      h-full
                      translate
                      ${
                        showModal
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }
                    `}
        >
          <div
            className="
                      bg-white
                      flex
                      flex-col
                      focus:outline-none
                      h-full
                      md:h-auto
                      outline-none
                      relative
                      rounded-lg
                      shadow-lg
                      translate
                      w-full
                      "
          >
            {/*HEADER*/}
            <div
              className="
                        border-b
                        flex
                        items-center
                        justify-center
                        p-6
                        relative
                        rounded-t
                        "
            >
              <button
                onClick={() => {
                  handleClose();
                }}
                className="
                          absolute
                          border-0
                          hover:opacity-70
                          left-9
                          p-1
                          transition
                          "
                type="button"
              >
                <IoMdClose size={18} />
              </button>
              <div className="font-semibold text-lg">{title}</div>
            </div>
            {/*BODY*/}
            <div className="flex-auto p-6 relative ">{body}</div>
            <div className="flex flex-col gap-2 p-6">
              {/*FOOTER*/}
              <div
                className="
                          flex
                          gap-4
                          items-center
                          w-full
                          "
              >
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    label={secondaryActionLabel || ""}
                    disable={disable}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  label={actionLabel}
                  disable={disable}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
