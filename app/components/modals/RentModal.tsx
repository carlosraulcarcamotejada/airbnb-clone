"use client";
import { FC, useState, useMemo } from "react";
import { Modal } from "./Modal";
import { useRentModalStore } from "@/app/hooks/useRentModalStore";
import { Heading } from "../Heading";
import { categories } from "../Navbar/Categories";
import { CategoryInput } from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import { CountrySelect } from "../inputs/CountrySelect";
import { Country } from "@/app/hooks/useCountries";
import dynamic from "next/dynamic";
import { Counter } from "../inputs/Counter";
import { ImageUpload } from "../inputs/ImageUpload";
// import Map from '../Map'

const RentModal: FC = (): JSX.Element => {
  const rentModal = useRentModalStore();

  enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
  }

  const [step, setSteps] = useState(STEPS.CATEGORY);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm<FieldValues>({ defaultValues });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const imageSrc = watch("imageSrc");

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: string | Country | number) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const stepBack = () => {
    setSteps((step) => step - 1);
  };

  const stepForward = () => {
    setSteps((step) => step + 1);
  };

  const actionLabel = useMemo((): string => {
    return step === STEPS.PRICE ? "Create" : "Next";
  }, [STEPS.PRICE, step]);

  const secondaryActionLabel = useMemo((): string | undefined => {
    return step === STEPS.CATEGORY ? undefined : "Back";
  }, [step, STEPS.CATEGORY]);

  let bodyContent = (
    <div className="flex flex-col gap-3">
      <Heading
        center={false}
        subtitle="Pick a category"
        title="Wich of these best describes your place?"
      />
      <div
        className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-3
                max-h-[50vh]
                overflow-y-auto
                "
      >
        {categories.map((categoryItem) => (
          <div key={categoryItem.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              label={categoryItem.label}
              selected={category === categoryItem.label}
              icon={categoryItem.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8 ">
        <Heading
          center={false}
          subtitle="Help guest find you!"
          title="Where is your place located?"
        />
        <CountrySelect
          onChange={(value) => setCustomValue("location", value)}
          value={location}
        />

        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          center={false}
          subtitle="what amenities do you have?"
          title="Share some basic about your place"
        />
        <Counter
          onChange={(value) => setCustomValue("guestCount", value)}
          subtitle="How many guests do you allow?"
          title="Guests"
          value={guestCount}
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue("roomCount", value)}
          subtitle="How many rooms do you have?"
          title="Rooms"
          value={roomCount}
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue("bathroomCount", value)}
          subtitle="How many bathrooms do you have?"
          title="Bathrooms"
          value={bathroomCount}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          center={false}
          subtitle="Show guests what your place loos like!"
          title="Add a photo of your"
        />
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />
      </div>
    );
  }

  return (
    <Modal
      actionLabel={actionLabel}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={stepForward}
      body={bodyContent}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : stepBack}
      title="Airbnb your home!"
    />
  );
};

export { RentModal };

const defaultValues = {
  category: "",
  location: null,
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
  imageSrc: "",
  price: 1,
  title: "",
  description: "",
};
