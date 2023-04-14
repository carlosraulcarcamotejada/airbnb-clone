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
                      ${
                        showModal
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }
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
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    isOutline
                    label={secondaryActionLabel || ""}
                    isDisable={!!disable}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  label={actionLabel}
                  isDisable={!!disable}
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
