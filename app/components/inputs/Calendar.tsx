import { FC } from "react";
import { RangeKeyDict, Range, DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
  value: Range;
}

const Calendar: FC<CalendarProps> = ({
  value,
  disabledDates,
  onChange,
}): JSX.Element => {
  return (
    <DateRange 
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
    />
  );
};

export { Calendar };
