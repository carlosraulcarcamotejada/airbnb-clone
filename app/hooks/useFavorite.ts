import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { SafeUser } from "../types";
import { useLoginModal } from "./useLoginModal";

interface IuseFavorite {
  currentUser?: SafeUser | null;
  listingId: string;
}

const useFavorite = ({ currentUser, listingId }: IuseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser?.favoriteIds, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      try {
        e.stopPropagation();
        if (!currentUser) return loginModal.onOpen();

        let request;

        request = hasFavorited
          ? () => axios.delete(`/api/favorites/${listingId}`)
          : () => axios.post(`/api/favorites/${listingId}`);

        await request();
        request = hasFavorited
          ? toast.success("Removed from favorites")
          : toast.success("Added to favorites");
        router.refresh();
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    //PROPERTIES
    hasFavorited,
    //METHODS
    toggleFavorite,
  };
};

export { useFavorite };
