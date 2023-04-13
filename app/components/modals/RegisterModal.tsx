"use client";
import { useRegisterModalStore } from "@/app/hooks/useRegisterModalStore";
import { FC, useState, useCallback } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { Button } from "../Button";

const RegisterModal: FC = (): JSX.Element => {
  const { close, open, isOpen } = useRegisterModalStore();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    //start registering user
    close();
    setIsLoading(false);
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
        subtitle="Create an account!"
        title="Welcome to Airbnb"
      />
      <Input
        id="email"
        label="Email"
        disable={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disable={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disable={isLoading}
        register={register}
        errors={errors}
        required
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
        isOutline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        isOutline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
                text-neutral-500
                  text-center
                  mt-4
                  font-light
                  "
      >
        <div className="flex items-center gap-2 justify-center">
          <div>Aleready have an account?</div>
          <div
            onClick={close}
            className="
                    text-neutral-800
                      cursor-pointer
                      hover:underline
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
      isDisable={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={close}
      onSumbit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export { RegisterModal };

const defaultValues = {
  name: "",
  email: "",
  password: "",
};
