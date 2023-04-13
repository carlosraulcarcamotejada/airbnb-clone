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
  const [hidePassword, setSidePassword] = useState< 'text' | 'password'>('password');

  const toggleHidePassword = () => {
    setSidePassword((hidePassword) =>{
        return hidePassword === 'text' ? 'password' : 'text'
    });
  };

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
            text-neutral-700 
            absolute 
            top-5
            left-2
            "
        />
      )}
      <input
        id={id}
        disabled={disable}
        {...register(id, { required })}
        placeholder=" "
        type={type === 'text'? 'text' : hidePassword }
        className={`
                peer
                w-full
                p-4
                pt-6
                font-light
                bg-white
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${formatPrice ? "pl-9" : "pl-4"}
                ${
                  errors[id]
                    ? "border-rose-500 focus:border-rose-500"
                    : "border-neutral-300 focus:border-black"
                }
                `}
      />
      {type === "password" && (
        <div
          onClick={toggleHidePassword}
          className="absolute text-neutral-500 top-3.5 right-2.5 rounded-full transition-all duration-200 p-2 active:bg-slate-100 active:scale-95"
        >
          <BiShow
            size={24}
            className={`${hidePassword === 'password' ? "block" : "hidden"}`}
          />
          <BiHide
            size={24}
            className={`${hidePassword === 'password' ? "hidden" : "block"}`}
          />
        </div>
      )}
      <label
        className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-top-left
                    ${formatPrice ? "left-9" : "left-4"}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? "text-rose-500" : "text-zinc-400"}
                `}
      >
        {label}
      </label>
    </div>
  );
};

export { Input };
