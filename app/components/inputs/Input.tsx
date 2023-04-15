"use client";
import { FC, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { BiHide, BiShow } from "react-icons/bi";

type props = {
  disable?: boolean;
  errors: FieldErrors;
  formatPrice?: boolean;
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  type?: "password" | "text";
};

const Input: FC<props> = ({
  disable,
  errors,
  formatPrice,
  id,
  label,
  register,
  required,
  type = "text",
}): JSX.Element => {



  const [hidePassword, setSidePassword] = useState<"text" | "password">(
    "password"
  );

  const toggleHidePassword = () => {
    setSidePassword((hidePassword) => {
      return hidePassword === "text" ? "password" : "text";
    });
  };

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
                    absolute 
                    left-2
                    top-5
                  text-neutral-700 
                    "
        />
      )}
      <input
        id={id}
        disabled={disable}
        {...register(id, { required })}
        placeholder=" "
        type={type === "text" ? "text" : hidePassword}
        className={`
                bg-white
                border-2
                disabled:cursor-not-allowed
                disabled:opacity-70
                font-light
                outline-none
                p-4
                peer
                pt-6
                rounded-md
                transition
                w-full
                ${formatPrice ? "pl-9" : "pl-4"}
                ${
                  errors[id]
                    ? "border-rose-500 focus:border-rose-500"
                    : "border-neutral-300 focus:border-black"
                }
                `}
      />
      {type === "password"  && (
        <div
          onClick={toggleHidePassword}
          className="
                    absolute 
                    active:bg-slate-100 
                    active:scale-95
                    duration-200 
                    p-2 
                    rounded-full 
                    text-neutral-500 
                    top-3.5 right-2.5 
                    transition-all 
                    "
        >
          <BiHide
            size={24}
            className={`${hidePassword === "password" ? "block" : "hidden"}`}
          />
          <BiShow
            size={24}
            className={`${hidePassword === "password" ? "hidden" : "block"}`}
          />
        </div>
      )}
      <label
        className={`
                    -translate-y-3
                    ${errors[id] ? "text-rose-500" : "text-zinc-400"}
                    ${formatPrice ? "left-9" : "left-4"}
                    absolute
                    duration-150
                    origin-top-left
                    peer-focus:-translate-y-4
                    peer-focus:scale-75
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    text-md
                    top-5
                    transform
                    z-10
                `}
      >
        {label}
      </label>
    </div>
  );
};

export { Input };
