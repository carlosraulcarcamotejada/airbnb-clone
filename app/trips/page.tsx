import { getCurrentUser } from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";
import { EmptyState } from "../components/EmptyState";
import { TripsClient } from "./TripsClient";


const TripPage = async (): Promise<JSX.Element> => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trip."
      />
    );

  return <TripsClient currentUser={currentUser} reservations={reservations} />;
};

export default TripPage;
