"use client";
import { FC, useMemo, useState, useCallback } from "react";
import { Modal } from "./Modal";
import { useSearchModal } from "@/app/hooks/useSearchModal";
import { useRouter, useSearchParams } from "next/navigation";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";
import qs from "query-string";
import { formatISO } from "date-fns";
import { Heading } from "../Heading";
import { CountrySelect } from "../inputs/CountrySelect";
import { Calendar } from "../inputs/Calendar";
import { Counter } from "../inputs/Counter";
import { Country } from "@/app/types";
import { Loader } from "../Loader";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal: FC = (): JSX.Element => {
  const searchModal = useSearchModal();
  const router = useRouter();
  const params = useSearchParams();

  const [location, setLocation] = useState<Country>();
  const [step, setStep] = useState<STEPS>(STEPS.LOCATION);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [bathroomCount, setBathroomCount] = useState<number>(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const Map = useMemo(
    () =>
      dynamic(async () => await import("../Map"), {
        ssr: false,
        loading: () => (
          <div className="h-[350px] grid place-content-center">
            <Loader />
          </div>
        ),
      }),
    [location]
  );

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) return onNext();

    let currentQuery = {};

    if (params) currentQuery = qs.parse(params.toString());

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
  }, [
    bathroomCount,
    dateRange.endDate,
    dateRange.startDate,
    guestCount,
    location?.value,
    onNext,
    params,
    roomCount,
    router,
    searchModal,
    step,
  ]);

  const actionLabel = useMemo((): string => {
    return step === STEPS.INFO ? "Search" : "Next";
  }, [step]);

  const secondaryActionLabel = useMemo((): string | undefined => {
    return step === STEPS.LOCATION ? undefined : "Back";
  }, [step]);

  let bodyContent = (
    <ContainerModal>
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as Country)}
      />
      <hr />
      <Map center={location?.latlng} />
    </ContainerModal>
  );

  if (step === STEPS.DATE) {
    bodyContent = (
      <ContainerModal>
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        />
      </ContainerModal>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <ContainerModal>
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          title="Guest"
          subtitle="How many guest are coming?"
          value={guestCount}
          onChange={setGuestCount}
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you need?"
          value={roomCount}
          onChange={setRoomCount}
        />
        <Counter
          title="Bathrooms"
          subtitle="How many bathroomsdo you need?"
          value={bathroomCount}
          onChange={setBathroomCount}
        />
      </ContainerModal>
    );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title="Filters"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      body={bodyContent}
    />
  );
};

const ContainerModal: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}): JSX.Element => {
  return <div className="flex flex-col gap-8">{children}</div>;
};

export { SearchModal };
