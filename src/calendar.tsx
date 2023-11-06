import { FunctionComponent, useState } from 'react';
import moment from 'moment';
import CalendarDays from './calendar-days';

import './calendar.style.scss';

const App: FunctionComponent = () => {
  const date = moment();
  const [year, setYear] = useState(date.year());
  const [month, setMonth] = useState(date.month() + 1);

  return (
    <div>
      <div className="calendar-year">
        <button
          className="year-control"
          type="button"
          onClick={e => {
            e.stopPropagation();
            setYear(prev => prev - 1);
          }}
        >{`<`}</button>
        {year}
        <button
          className="year-control"
          type="button"
          onClick={e => {
            e.stopPropagation();
            setYear(prev => prev + 1);
          }}
        >{`>`}</button>
      </div>
      <div className="month-row">
        {moment(`${year}-${month}`, 'YYYY-MM').format('MMMM')}
      </div>
      <CalendarDays year={year} month={month} />
    </div>
  );
};

export default App;
