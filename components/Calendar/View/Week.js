import React from 'react';

import css from './Week.module.scss';

import { arrayFromInteger } from 'lib';

export const Week = ({ ...props }) => {
  console.log(props.active.dow);

  return (
    <div className={css.main}>
      <div className={css.days}>
        {weekdays.map((d, i) => (
          <Day dow={{ d: d, dInt: i + 1 }} key={`week${i}`} {...props} />
        ))}
      </div>
    </div>
  );
};

const Day = ({ dow, ...props }) => {
  return (
    <div className={css.day}>
      <header>
        <h6>{dow.d}</h6>
        <h5>{props.active.d}</h5>
        {props.active.m}
      </header>

      <div className={css.hours}>
        {hours.map((h, i) => (
          <div key={`hours${h}${i}`} className={css.hour}>
            <h6>{h}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

const weekdays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// 0, 1, 2, 3, 4, 5, 6,
// 19, 20, 21, 22, 23,
