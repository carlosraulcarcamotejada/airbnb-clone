"use client";
import { useRegisterModalStore } from "@/app/hooks/useRegisterModalStore";
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
import { signIn } from "next-auth/react";

const RegisterModal: FC = (): JSX.Element => {
  const { onClose, isOpen } = useRegisterModalStore();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        onClose();
        toast.success("User saved succesfully");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        id="name"
        label="Name"
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
            onClick={onClose}
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
      isOpen={isOpen}
      onClose={onClose}
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
