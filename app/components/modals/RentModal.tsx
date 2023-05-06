"use client";
import { FC, useState, useMemo, ReactNode } from "react";
import { Modal } from "./Modal";
import { useRentModal } from "@/app/hooks/useRentModal";
import { Heading } from "../Heading";
import { categories } from "../Navbar/Categories";
import { CategoryInput } from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CountrySelect } from "../inputs/CountrySelect";
import { Country } from "@/app/hooks/useCountries";
import dynamic from "next/dynamic";
import { Counter } from "../inputs/Counter";
import { ImageUpload } from "../inputs/ImageUpload";
import { Input } from "../inputs/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const RentModal: FC = (): JSX.Element => {
  const router = useRouter();
  const rentModal = useRentModal();

  enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
  }

  const [step, setSteps] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm<FieldValues>({ defaultValues });

  const bathroomCount = watch("bathroomCount");
  const category = watch("category");
  const guestCount = watch("guestCount");
  const imageSrc = watch("imageSrc");
  const location = watch("location");
  const roomCount = watch("roomCount");

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

    axios;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      if (step !== STEPS.PRICE) return stepForward();
      setIsLoading(true);
      await axios.post("/api/listings", data);
      //TOAST OR SNACKBAR
      toast.success("Listing created");
      router.refresh();
      reset();
      setSteps(STEPS.CATEGORY);
      rentModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actionLabel = useMemo((): string => {
    return step === STEPS.PRICE ? "Create" : "Next";
  }, [STEPS.PRICE, step]);

  const secondaryActionLabel = useMemo((): string | undefined => {
    return step === STEPS.CATEGORY ? undefined : "Back";
  }, [step, STEPS.CATEGORY]);

  let bodyContent = (
    <RentModalContainer>
      <Heading
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
              icon={categoryItem.icon}
              label={categoryItem.label}
              onClick={(category) => setCustomValue("category", category)}
              selected={category === categoryItem.label}
            />
          </div>
        ))}
      </div>
    </RentModalContainer>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <RentModalContainer>
        <Heading
          subtitle="Help guest find you!"
          title="Where is your place located?"
        />
        <CountrySelect
          onChange={(value) => setCustomValue("location", value)}
          value={location}
        />

        <Map center={location?.latlng} />
      </RentModalContainer>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <RentModalContainer>
        <Heading
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
      </RentModalContainer>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <RentModalContainer>
        <Heading
          subtitle="Show guests what your place loos like!"
          title="Add a photo of your"
        />
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />
      </RentModalContainer>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <RentModalContainer>
        <Heading
          subtitle="Short and sweet works best!"
          title="How would you describe your place?"
        />
        <Input
          disable={isLoading}
          errors={errors}
          id="title"
          label="Title"
          register={register}
          required
        />
        <hr />
        <Input
          disable={isLoading}
          errors={errors}
          id="description"
          label="Description"
          register={register}
          required
        />
      </RentModalContainer>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <RentModalContainer>
        <Heading
          center={false}
          subtitle="How much do you charge per night?"
          title="Now, set your price"
        />
        <Input
          disable={isLoading}
          errors={errors}
          formatPrice={true}
          id="price"
          label="Price"
          register={register}
          required
          type="number"
        />
      </RentModalContainer>
    );
  }

  return (
    <Modal
      actionLabel={actionLabel}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : stepBack}
      title="Airbnb your home!"
    />
  );
};

export { RentModal };

const defaultValues = {
  bathroomCount: 1,
  category: "",
  description: "",
  guestCount: 1,
  imageSrc: "",
  location: null,
  price: 1,
  roomCount: 1,
  title: "",
};

const RentModalContainer: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  return <div className="flex flex-col gap-8">{children}</div>;
};
