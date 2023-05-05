"use client";
import { FC, Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

interface MyModalProps {
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
}

const Modal: FC<MyModalProps> = ({
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
  const handleSubmit = () => {
    if (disable) return;
    onSubmit();
  };

  const handleSecondaryAction = () => {
    if (disable || !secondaryAction) return;
    secondaryAction();
  };

  if (!isOpen) return <></>;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 "
          enterFrom="opacity-0 "
          enterTo="opacity-100 "
          leave="ease-in duration-200 "
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 "
              enterFrom="opacity-0 translate-y-80"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in transition duration-200 "
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-80"
            >
              <Dialog.Panel className="bg-white flex flex-col focus:outline-none h-full md:h-auto outline-none relative translate md:rounded-lg shadow-lg lg:w-3/6  md:w-4/6 mx-auto w-full xl:w-2/5">
                {/*HEADER*/}
                <Dialog.Title
                  className="border-b flex items-center justify-center p-6 relative"
                  as="div"
                >
                  <button
                    onClick={onClose}
                    className="absolute  focus:outline-none active:scale-90 hover:bg-neutral-100 hover:opacity-70 left-9 transition p-2 rounded-full"
                    type="button"
                  >
                    <IoMdClose size={18} />
                  </button>
                  <div className="font-semibold text-lg">{title}</div>
                </Dialog.Title>
                <div className="mt-2">
                  {/*BODY*/}
                  <div className="flex-auto p-6 relative ">{body}</div>
                  <div className="flex flex-col gap-2 p-6">
                    {/*FOOTER*/}
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
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { Modal };
