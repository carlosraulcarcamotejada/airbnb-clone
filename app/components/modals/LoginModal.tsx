"use client";
import { FC, useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { Button } from "../Button";
import { toast } from "react-hot-toast";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { Modal } from "./Modal";

const LoginModal: FC = (): JSX.Element => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback?.error);
      }
    });
  };

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div
      className="
                flex
                flex-col
                gap-4
                "
    >
      <Heading
        center={true}
        subtitle="Login to your account"
        title="Welcome back"
      />
      <Input
        disable={isLoading}
        errors={errors}
        id="email"
        label="Email"
        register={register}
        required
        watch={watch}
      />
      <Input
        disable={isLoading}
        errors={errors}
        id="password"
        label="Password"
        register={register}
        required
        type="password"
        watch={watch}
      />
    </div>
  );

  const footerContent = (
    <div
      className="
                flex
                flex-col
                gap-4
                mt-3
                "
    >
      <div className="grid grid-cols-11 place-items-center">
        <hr className="col-span-5 w-full  dark:border-neutral-700" />
        <div className="col-span-1">or</div>
        <hr className="col-span-5 w-full  dark:border-neutral-700" />
      </div>
      <Button
        icon={FcGoogle}
        label="Continue with Google"
        onClick={() => signIn("google")}
        outline
      />
      <Button
        icon={AiFillGithub}
        label="Continue with Github"
        onClick={() => signIn("github")}
        outline
      />
      <div
        className="
                  font-light
                  mt-4
                  text-center
                  text-neutral-500
                  dark:text-neutral-300
                  "
      >
        <div
          className="
                    flex
                    gap-2 
                    items-center 
                    justify-center
                    "
        >
          <div>First time using Airbnb?</div>
          <div
            onClick={toggle}
            className="
                      cursor-pointer
                      hover:underline
                      text-neutral-800
                      dark:text-neutral-500
                      "
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      actionLabel="Continue"
      body={bodyContent}
      disable={isLoading}
      footer={footerContent}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Login"
    />
  );
};

export { LoginModal };

const defaultValues = {
  email: "",
  password: "",
};
