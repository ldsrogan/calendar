import moment from 'moment';
import * as React from 'react';

import './calendar-days.style.scss';

interface ICalendarDaysProps {
  year: number;
  month: number;
}

const CalendarDays: React.FunctionComponent<ICalendarDaysProps> = ({
  year,
  month,
}: ICalendarDaysProps) => {
  const dt = moment(`${year}-${month}`, 'YYYY-MM');
  const numDays = dt.daysInMonth();
  const startDay = dt.day();
  let row = 0;
  return (
    <table>
      <tbody>
        {Array.apply(0, Array(6)).map((_, index) => {
          const date = index + 1 + row * 6 - startDay;
          row++;
          if (date > numDays) return null;
          return (
            <tr key={`cal-${index}`}>
              <CalendarRow date={date} lastDate={numDays} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CalendarDays;

const CalendarRow = ({
  date,
  lastDate,
}: {
  date: number;
  lastDate: number;
}) => {
  let initialDate = date - 1;
  return Array.apply(0, Array(7)).map(() => {
    initialDate++;
    return (
      <td key={`cal-col-${initialDate}`}>
        {initialDate <= lastDate && initialDate > 0 ? initialDate : ''}
      </td>
    );
  });
};
