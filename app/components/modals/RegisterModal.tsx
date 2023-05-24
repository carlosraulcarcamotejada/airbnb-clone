"use client";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { FC, useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { Button } from "../Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { Modal } from "./Modal";

const RegisterModal: FC = (): JSX.Element => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", data);
      reset();
      registerModal.onClose();
      toast.success("User saved succesfully");
      loginModal.onOpen();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
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
        subtitle="Create an account!"
        title="Welcome to Airbnb"
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
        id="name"
        label="Name"
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
        <hr className="col-span-5 w-full dark:border-neutral-700" />
        <div className="col-span-1">or</div>
        <hr className="col-span-5 w-full dark:border-neutral-700" />
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
                  "
      >
        <div
          className="
                    flex
                    gap-2 
                    items-center 
                    justify-center
                    text-neutral-500
                    dark:text-neutral-500
                    "
        >
          <div>Aleready have an account?</div>
          <div
            onClick={toggle}
            className="
                      cursor-pointer
                      hover:underline
                      text-neutral-800
                      dark:text-neutral-300
                      "
          >
            Login
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
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Register"
    />
  );
};

export { RegisterModal };

const defaultValues = {
  name: "",
  email: "",
  password: "",
};
