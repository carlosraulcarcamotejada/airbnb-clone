import { FC, Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

interface ModalProps {
  actionLabel: string;
  body?: ReactElement;
  disable?: boolean;
  footer?: ReactElement;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  title?: string;
}

const Modal: FC<ModalProps> = ({
  actionLabel,
  body,
  disable,
  footer,
  isOpen,
  onClose,
  onSubmit,
  secondaryAction,
  secondaryActionLabel,
  title,
}): JSX.Element => {
  const handleSubmit = () => {
    if (disable) return;
    onSubmit();
  };

  const handleSecondaryAction = () => {
    if (disable || !secondaryAction) return;
    secondaryAction();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="bg-opacity-0 bg-transparent"
          enterTo="bg-opacity-60 bg-black"
          leave="ease-in duration-200"
          leaveFrom="bg-opacity-60 bg-black"
          leaveTo="opacity-0 bg-transparent"
        >
          <div className="fixed inset-0" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 delay-100"
          enterFrom="opacity-0 translate-y-96"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200 delay-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-96"
        >
          <div
            className="
                      fixed 
                      flex
                      h-full
                      inset-0 
                      items-center 
                      justify-center 
                      "
          >
            <Dialog.Panel
              className="
                      bg-white
                      focus:outline-none 
                      h-full
                      mx-auto 
                      outline-none
                      overflow-y-auto
                      relative
                      w-full
                      sm:h-auto
                      sm:rounded-lg
                      sm:shadow-lg
                      sm:w-[512px]
                      md:h-auto
                      lg:w-[640px]
                      dark:bg-neutral-900
                      dark:text-neutral-400
                      "
            >
              {/* MODAL TITLE */}
              <Dialog.Title
                as="div"
                className="
                          border-b 
                          flex 
                          h-14
                          items-center 
                          justify-center
                          relative
                          md:h-16
                          dark:bg-neutral-900
                          dark:border-neutral-700
                          "
              >
                <CloseButtonModal onClose={onClose} />
                <div className="font-semibold text-lg">{title}</div>
              </Dialog.Title>
              <div className="mt-2">
                <div className="flex-auto p-6 relative">{body}</div>
                <div className="flex flex-col gap-2 p-6">
                  <div className="flex gap-4 items-center w-full">
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
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

const CloseButtonModal: FC<{
  onClose: () => void;
}> = ({ onClose }): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="
                absolute 
                active:scale-90 
                focus:outline-none 
                hover:bg-neutral-100
                hover:dark:bg-neutral-700
                hover:opacity-70 
                left-4
                p-2 
                rounded-full
                transition
                dark:text-neutral-400
                "
    >
      <IoMdClose size={18} />
    </button>
  );
};

export { Modal };
