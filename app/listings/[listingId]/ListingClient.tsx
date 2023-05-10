"use client";
import { FC, useMemo } from "react";
import { Reservation } from "@prisma/client";
import { SafeListings, SafeUser } from "@/app/types";
import { categories } from "@/app/components/Navbar/Categories";
import { Container } from "@/app/components/Container";
import { ListingHead } from "@/app/components/listings/ListingHead";
import { ListingInfo } from "@/app/components/listings/ListingInfo";

interface ListingClientProps {
  currentUser?: SafeUser | null;
  listing: SafeListings & { user: SafeUser };
  reservation?: Reservation[];
}

const ListingClient: FC<ListingClientProps> = ({
  listing,
  currentUser,
  reservation,
}): JSX.Element => {
  const category = useMemo(() => {
    return categories.find((category) => category.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            currentUser={currentUser}
            id={listing.id}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            title={listing.title}
          />
          <div
            className="
                        grid
                        grid-cols-1
                        mt-6
                        md:gap-10
                        md:grid-cols-7
                        "
          >
            <ListingInfo
              bathroomCount={listing.bathroomCount}
              category={category}
              description={listing.description}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
              roomCount={listing.roomCount}
              user={listing.user}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ListingClient };
