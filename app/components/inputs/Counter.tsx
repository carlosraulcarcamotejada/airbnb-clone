"use client";
import { FC, useCallback } from "react";
import { IconType } from "react-icons";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  onChange: (value: number) => void;
  subtitle: string;
  title: string;
  value: number;
}

const Counter: FC<CounterProps> = ({
  onChange,
  subtitle,
  title,
  value,
}): JSX.Element => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;
    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex items-center gap-4">
        <ButtonCounter
          icon={AiOutlineMinus}
          onClick={onReduce}
          enabled={value > 1}
        />
        <div className="font-light text-xl text-neutral-600 w-4">{value}</div>
        <ButtonCounter icon={AiOutlinePlus} onClick={onAdd} enabled />
      </div>
    </div>
  );
};

const ButtonCounter: FC<{
  icon: IconType;
  onClick: () => void;
  enabled: boolean;
}> = ({ icon: Icon, onClick, enabled }): JSX.Element => {
  //if (!enabled) return <></>;

  return (
    <div
      onClick={onClick}
      className={`   
                    ${!enabled ? "opacity-60" : "hover:opacity-80"}
                    ${!enabled ? "cursor-not-allowed" : ""}
                    ${!enabled ? "focus:outline-none" : "active:bg-neutral-200"}
                    ${enabled ? "hover:bg-neutral-100" : ""}
                    border
                    border-neutral-400
                    cursor-pointer
                    flex
                    h-10
                    items-center
                    justify-center
                    rounded-full
                    text-neutral-600
                    transition
                    w-10
                    `}
    >
      <Icon />
    </div>
  );
};

export { Counter };