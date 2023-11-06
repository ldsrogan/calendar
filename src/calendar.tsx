import { FunctionComponent, useState } from 'react';
import moment from 'moment';
import CalendarDays from './calendar-days';

import './calendar.style.scss';

const App: FunctionComponent = () => {
  const date = moment();
  const [year, setYear] = useState(date.year());
  const [month, setMonth] = useState(date.month() + 1);

  return (
    <div className="calendar-container">
      <div className="calendar-year">
        <button
          className="date-control"
          type="button"
          onClick={e => {
            e.stopPropagation();
            setYear(prev => prev - 1);
          }}
        >{`<`}</button>
        <div className="date-text">{year}</div>
        <button
          className="date-control"
          type="button"
          onClick={e => {
            e.stopPropagation();
            setYear(prev => prev + 1);
          }}
        >{`>`}</button>
      </div>
      <div className="month-row">
        <button
          className="date-control"
          type="button"
          onClick={e => {
            e.stopPropagation();
            let prev = month - 1;
            if (prev <= 0) {
              prev = 12;
              setYear(pv => pv - 1);
            }

            setMonth(prev);
          }}
        >{`<`}</button>
        <div className="date-text">
          {moment(`${year}-${month}`, 'YYYY-MM').format('MMMM')}
        </div>
        <button
          className="date-control"
          type="button"
          onClick={e => {
            e.stopPropagation();
            let next = month + 1;
            if (next > 12) {
              next = 1;
              setYear(pv => pv + 1);
            }

            setMonth(next);
          }}
        >{`>`}</button>
      </div>
      <CalendarDays year={year} month={month} />
    </div>
  );
};

export default App;
