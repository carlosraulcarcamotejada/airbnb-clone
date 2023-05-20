"use client";
import { FC } from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: FC<HeartButtonProps> = ({
  currentUser,
  listingId,
}): JSX.Element => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    currentUser,
    listingId,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
                active:scale-95
                cursor-pointer      
                hover:opacity-80
                relative
                transition
                "
    >
      <AiOutlineHeart
        size={30}
        className="
                  absolute
                  fill-white
                  "
      />
      <AiFillHeart
        size={30}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export { HeartButton };
