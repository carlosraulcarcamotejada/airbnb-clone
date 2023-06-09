"use client";
import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useFooterModal } from "@/app/hooks/useFooterModal";
import { FooterContentModal } from "../footer/FooterContentModal";
import { IoMdClose } from "react-icons/io";

const FooterModal: FC = (): JSX.Element => {
  const { isOpen, onClose } = useFooterModal();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 "
          enterFrom="bg-opacity-0 bg-transparent"
          enterTo="bg-opacity-60 bg-black"
          leave="ease-in duration-200"
          leaveFrom="bg-opacity-60 bg-black"
          leaveTo="opacity-0 bg-transparent"
        >
          <div className="fixed inset-0" />
        </Transition.Child>
        <Transition.Child
          as="div"
          className="fixed w-full bottom-0 left-0"
          enter="ease-out duration-300 delay-100"
          enterFrom="opacity-0 translate-y-96"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200 delay-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-96"
        >
          <Dialog.Panel
            className="
                      bg-white 
                      flex 
                      flex-col 
                      relative
                      rounded-t-xl 
                      shadow-lg
                      w-full 
                      md:h-[695px] 
                      xl:h-[356px] 
                      "
          >
            {/*HEADER*/}
            <Dialog.Title
              as="div"
              className="
                        flex 
                        h-12
                        items-center
                        justify-center
                        relative
                        dark:bg-neutral-900
                        "
            >
              <CloseButtonModal onClose={onClose}  />
            </Dialog.Title>
            {/*BODY CONTENT*/}
            <FooterContentModal />
          </Dialog.Panel>
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
                top-2
                transition
                dark:text-neutral-400
                "
    >
      <IoMdClose size={18} />
    </button>
  );
};

export { FooterModal };
