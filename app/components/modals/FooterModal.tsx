"use client";
import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { useFooterModal } from "@/app/hooks/useFooterModal";
import { FooterContentModal } from "../footer/FooterContentModal";

const FooterModal: FC = (): JSX.Element => {
  const { isOpen, onClose } = useFooterModal();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
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

          enter="ease-out duration-300 delay-100 transition-all "
          enterFrom="opacity-0 translate-y-96"
          enterTo="opacity-100 translate-y-0"

          leave="ease-in duration-200 delay-100 transition-all"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-96"
        >
          <Dialog.Panel className="bg-white flex flex-col md:h-[695px]  lg:h-[356px] outline-none relative rounded-t-xl shadow-lg w-full ">
            {/*HEADER*/}
            <Dialog.Title
              className="flex items-center justify-center relative h-12"
              as="div"
            >
              <button
                onClick={onClose}
                className="absolute focus:outline-none active:scale-90 hover:bg-neutral-100 hover:opacity-70 left-4 top-4 transition p-2 rounded-full"
                type="button"
              >
                <IoMdClose size={18} />
              </button>
            </Dialog.Title>
            {/*BODY CONTENT*/}
            <FooterContentModal />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export { FooterModal };
