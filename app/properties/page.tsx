import { getCurrentUser } from "../actions/getCurrentUser";
import { getListings } from "../actions/getListing";
import { EmptyState } from "../components/EmptyState";
import { PropertiesClient } from "./PropertiesClient";

interface IParams {
  listingId?: string;
}

const PropertiesPage = async (params: IParams): Promise<JSX.Element> => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;

  const listings = await getListings({ userId: currentUser.id });


  console.log(listings);

  if (listings.length === 0)
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you haven't properties."
      />
    );

  return <PropertiesClient currentUser={currentUser} listings={listings} />;
};

export default PropertiesPage;
