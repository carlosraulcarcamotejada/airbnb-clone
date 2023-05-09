import { FC, Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CloseButtonModal } from "./CloseButtonModal";
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
          <div className="fixed inset-0 flex items-center justify-center h-full">
            <Dialog.Panel
              className="
                      bg-white
                      focus:outline-none 
                      mx-auto 
                      outline-none
                      overflow-y-auto
                      relative
                      w-full
                      h-full
                      sm:h-auto
                      sm:w-[512px]
                      sm:rounded-lg
                      sm:shadow-lg
                      md:h-auto
                      lg:w-[640px]
                      "
            >
              <Dialog.Title
                as="div"
                className="
                            border-b 
                            flex 
                            items-center 
                            justify-center
                            h-14
                            relative
                            md:h-16
                            "
              >
                <CloseButtonModal left={9} onClose={onClose} />
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

export { Modal };
