//THIS IS A SERVER COMPONENT
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getListingById } from "@/app/actions/getListingById";
import { EmptyState } from "@/app/components/EmptyState";
import { ListingClient } from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({
  params,
}: {
  params: IParams;
}): Promise<JSX.Element> => {
  const listing = await getListingById(params);

  if (!listing) return <EmptyState />;

  const currentUser = await getCurrentUser();

  return (
    <ListingClient 
      listing={listing}
      currentUser={currentUser}
    />
    );
};

export default ListingPage;
