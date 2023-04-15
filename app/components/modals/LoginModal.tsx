"use client";
import { FC, useState } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { Button } from "../Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useLoginModalStore } from "@/app/hooks/useLoginModalStore";
import { useRegisterModalStore } from "@/app/hooks/useRegisterModalStore";
import { signIn } from "next-auth/react";

const LoginModal: FC = (): JSX.Element => {
  const registerModal = useRegisterModalStore();
  const loginModal = useLoginModalStore();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials',{...data});
  };

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
      />
      <Input
        disable={isLoading}
        errors={errors}
        id="password"
        label="Password"
        register={register}
        required
        type="password"
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
      <hr />
      <Button
        icon={FcGoogle}
        label="Continue with Google"
        onClick={() => {}}
        outline
      />
      <Button
        icon={AiFillGithub}
        label="Continue with Github"
        onClick={() => {}}
        outline
      />
      <div
        className="
                  font-light
                  mt-4
                  text-center
                text-neutral-500
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
          <div>Aleready have an account?</div>
          <div
            onClick={loginModal.onClose}
            className="
                      cursor-pointer
                      hover:underline
                    text-neutral-800
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
