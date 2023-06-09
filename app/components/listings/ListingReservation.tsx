"use client";
import { FC } from "react";
import { Range } from "react-date-range";
import { Calendar } from "../inputs/Calendar";
import { Button } from "../Button";

interface ListingReservationProps {
  dateRange: Range;
  disabled?: boolean;
  disabledDates: Date[];
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  price: number;
  totalPrice: number;
}

const ListingReservation: FC<ListingReservationProps> = ({
  dateRange,
  disabled,
  disabledDates,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
}): JSX.Element => {
  return (
    <div
      className="
                bg-white
                rounded-xl
                border
                border-neutral-200
                overflow-hidden
                dark:bg-neutral-900
                dark:border-neutral-700
                "
    >
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold dark:text-neutral-300">$ {price}</div>
        <div className="font-light text-neutral-600 dark:text-neutral-400">night</div>
      </div>
      <hr />
      <div>
        <Calendar
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => onChangeDate(value.selection)}
        />
      </div>
      <hr />
      <div className="p-4">
        <Button disable={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div
        className="
                    p-4
                    flex
                    items-center
                    justify-between
                    font-semibold
                    text-lg
                    dark:text-neutral-300
                    "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export { ListingReservation };
