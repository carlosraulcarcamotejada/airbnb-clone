import { getCurrentUser } from "../actions/getCurrentUser";
import { getFavoriteListings } from "../actions/getFavoriteListings";
import { EmptyState } from "../components/EmptyState";
import { FavoritesClient } from "./FavoritesClient";

const FavoritePage = async (): Promise<JSX.Element> => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings?.length === 0)
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorites listing"
      />
    );




  return (
    <FavoritesClient 
      currentUser={currentUser}
      listing={listings}
    />
  );
};

export default FavoritePage;
