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
              <CalendarRow
                date={date}
                lastDate={numDays}
                currentMonth={moment().month() + 1 === month}
              />
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
  currentMonth,
}: {
  date: number;
  lastDate: number;
  currentMonth: boolean;
}) => {
  let targetDate = date - 1;
  const today = moment().date();

  return Array.apply(0, Array(7)).map(() => {
    targetDate++;
    console.log(targetDate, today);
    return (
      <td key={`cal-col-${targetDate}`}>
        <div
          className={`day-col${
            today === targetDate && currentMonth ? '--today' : ''
          }`}
        >
          {targetDate <= lastDate && targetDate > 0 ? targetDate : ''}
        </div>
      </td>
    );
  });
};
