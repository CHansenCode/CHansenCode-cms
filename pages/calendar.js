import { useState, useEffect } from 'react';

import Calendar from 'react-calendar';

import { useDates } from 'lib';

export default function CalendarPage() {
  const [daysArray, setDaysArray] = useState([]);

  const { y, m, d, weekday, mStr } = useDates();

  function daysInMonth(m, y) {
    return m === 2
      ? y & 3 || (!(y % 25) && y & 15)
        ? 28
        : 29
      : 30 + ((m + (m >> 3)) & 1);
  }

  // console.log(daysInMonth(m, y));

  // console.log('year', y);
  // console.log('month', m);
  console.log('day', d);
  // console.log('weekday', weekday);
  // console.log('month', mStr);

  function daysInThisMonthArray(daysInMonth) {
    let arr = [];
    let day = 1;

    for (let index = 0; index < daysInMonth; index++) {
      arr.push(day);
      day = day + 1;
    }

    return arr;
  }

  useEffect(() => {
    setDaysArray(daysInThisMonthArray(daysInMonth(m, y)));
  }, []);

  return (
    <>
      <div className="calendar_wrapper">
        <div>
          <h2>{y}</h2>
          <h4>{mStr}</h4>
        </div>

        {daysArray &&
          daysArray.map((day, i) => <Day key={`day${i}`} data={day} />)}
      </div>

      <style jsx>
        {`
          .calendar_wrapper {
            height: 100vh;
            width: 100%;

            padding: 5vw;

            display: grid;
            grid-template:
              '1 2 3 4 5 6 7' 1fr
              '8 9 10 11 12 13 14' 1fr
              '15 16 17 18 19 20 21' 1fr
              '22 23 24 25 26 27 28' 1fr
              '29 30 31 32 33 34 35' 1fr
              '36 37 38 39 40 41 42' 1fr
              '43 44 45 46 47 48 49' 1fr / 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            gap: 0.5rem;
          }
        `}
      </style>
    </>
  );
}

const Day = ({ date, data }) => {
  return (
    <>
      <div className="pc3b day">
        <h5>{data}</h5>
      </div>

      <style jsx>
        {`
          .day {
            padding: 0.5rem;
            box-shadow: inset 0 0 10rem -9rem currentColor;
          }
        `}
      </style>
    </>
  );
};
