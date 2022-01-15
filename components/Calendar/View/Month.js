import React from 'react';

import css from './Month.module.scss';

export const Month = ({ daysArray, ...props }) => {
  return (
    <div className={css.month}>
      {daysArray.map((d, i) => (
        <div className={css.day} key={`${d}${i}`}>
          <h4>{d}</h4>
        </div>
      ))}
    </div>
  );
};
