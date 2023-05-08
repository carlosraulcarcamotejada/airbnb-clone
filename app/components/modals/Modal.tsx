"use client";
import { FC, Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../Button";
import { CloseButtonModal } from "./CloseButtonModal";

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
          enter="ease-out duration-300 "
          enterFrom="opacity-0 translate-y-80"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200 "
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-80"
        >
          <div className="fixed inset-0 overflow-y-auto ">
            <div
              className="
                        flex
                        items-center 
                        justify-center 
                        min-h-full
                        text-center
                        "
            >
              <Dialog.Panel
                className="
                          bg-white 
                          flex 
                          flex-col 
                          focus:outline-none 
                          h-full 
                          lg:w-3/6 md:w-4/6 
                          md:h-auto 
                          md:rounded-lg 
                          mx-auto 
                          outline-none 
                          relative 
                          shadow-lg 
                          w-full
                          xl:w-2/5
                          "
              >
                {/*HEADER*/}
                <Dialog.Title
                  as="div"
                  className="
                            border-b 
                            flex 
                            items-center 
                            justify-center
                            p-6 
                            relative"
                >
                  <CloseButtonModal left={9} onClose={onClose} />
                  <div className="font-semibold text-lg">{title}</div>
                </Dialog.Title>
                <div className="mt-2">
                  {/*BODY CONTENT*/}
                  <div className="flex-auto p-6 relative ">{body}</div>
                  <div className="flex flex-col gap-2 p-6">
                    {/*FOOTER CONTENT*/}
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
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export { Modal };
