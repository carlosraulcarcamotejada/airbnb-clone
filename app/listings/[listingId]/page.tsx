//THIS IS A SERVER COMPONENT
import { getListingById } from "@/app/actions/getListingById";
import { EmptyState } from "@/app/components/EmptyState";

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

  return <div>{listing.title}</div>;
};

export default ListingPage;
