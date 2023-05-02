import { FC } from "react";
import { Container } from "./components/Container";
import { EmptyState } from "./components/EmptyState";
import { getListings } from "./actions/getListing";
import { Listing } from "@prisma/client";
import { ListingCard } from "./components/listings/ListingCard";
import { getCurrentUser } from "./actions/getCurrentUser";


const Home = async (): Promise<JSX.Element> => {
  const listings: Listing[] = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className="
                    2xl:grid-cols-5
                    gap-8
                    grid
                    grid-cols-1
                    lg:grid-cols-4
                    md:grid-cols-3
                    pt-24
                    sm:grid-cols-2
                    xl:grid-cols-5
                    "
      >
        {listings.map((listing: Listing) => (
          <ListingCard 
          currentUser = { currentUser}
          key={listing.id} 
          data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
