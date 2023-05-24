import { FC } from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  onClick: (value: string) => void;
  selected?: boolean;
}

export const CategoryInput: FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  onClick,
  selected,
}): JSX.Element => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
            ${selected ? "border-black dark:border-neutral-400" : "border-neutral-200  dark:border-neutral-700"}
            border-2
            cursor-pointer
            flex
            flex-col
            gap-3
            hover:border-black
            hover:dark:border-neutral-400
            p-4
            rounded-xl
            transition
            `}
    >
        <Icon size={30} />
        <div className="font-semibold">
            {label}
        </div>
    </div>
  );
};
