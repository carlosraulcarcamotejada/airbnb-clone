import { getCurrentUser } from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";
import { EmptyState } from "../components/EmptyState";
import { ReservationsClient } from "./ReservationsClient";

const ReservationPage = async (): Promise<JSX.Element> => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const reservations = await getReservations({ authoId: currentUser.id });

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No reservarion found"
        subtitle="Looks like you have no reservation on your properties"
      />
    );

  return (
    <ReservationsClient currentUser={currentUser} reservations={reservations} />
  );
};

export default ReservationPage;
