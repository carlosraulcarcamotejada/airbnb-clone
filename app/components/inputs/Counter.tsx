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
      <div className="flex flex-col items-start justify-start">
        <div className="font-medium text-start dark:text-neutral-400">{title}</div>
        <div className="font-light text-gray-600 text-start dark:text-neutral-500">{subtitle}</div>
      </div>
      <div className="flex gap-4 items-center">
        <ButtonCounter
          icon={AiOutlineMinus}
          onClick={onReduce}
          enabled={value > 1}
        />
        <div className="font-light text-xl text-neutral-600 w-4 dark:text-neutral-400 self-center">{value}</div>
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
                    ${enabled ? "" : "cursor-not-allowed"}
                    ${enabled ? "active:bg-neutral-200 dark:active:bg-neutral-700" : "focus:outline-none"}
                    ${enabled ? "hover:opacity-80" : " opacity-60"}
                    ${enabled ? "" : "hover:bg-neutral-100 dark:hover:bg-neutral-500"}
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
                    dark:border-neutral-700
                    `}
    >
      <Icon className="dark:text-neutral-400" />
    </div>
  );
};

export { Counter };
