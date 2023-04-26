"use client";
import { FC, useState, useMemo } from "react";
import { Modal } from "./Modal";
import { useRentModalStore } from "@/app/hooks/useRentModalStore";
import { Heading } from "../Heading";
import { categories } from "../Navbar/Categories";
import { CategoryInput } from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";

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

  const setCustomValue = (id: string, value: string) => {

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

  const actionLabel = useMemo(() => {
    return step === STEPS.PRICE ? "Create" : "Next";
  }, [STEPS.PRICE, step]);

  const secondaryActionLabel = useMemo(() => {
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
              onClick={(category) => setCustomValue('category',category)}
              label={categoryItem.label}
              selected={category === categoryItem.label}
              icon={categoryItem.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      actionLabel={actionLabel}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
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
