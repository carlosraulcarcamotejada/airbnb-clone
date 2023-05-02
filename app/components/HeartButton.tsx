"use client";
import { FC } from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: FC<HeartButtonProps> = ({
  currentUser,
  listingId,
}): JSX.Element => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

  return (
    <div
      onClick={toggleFavorite}
      className="
                cursor-pointer      
                hover:opacity-80
                relative
                transition
                "
    >
      <AiOutlineHeart
        size={28}
        className="
                -right-[2px]
                -top-[2px]
                absolute
                fill-white
            "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export { HeartButton };
