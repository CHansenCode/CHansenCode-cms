import { useState } from 'react';

import { Day, Week, Month } from './View';
import { Loading } from 'chansencode-lib';

import css from './Calendar.module.scss';

export const Calendar = ({ ...props }) => {
  return (
    <div className={css.frame}>
      {props.view === 'month' ? (
        <Month {...props} />
      ) : props.view === 'week' ? (
        <Week {...props} />
      ) : props.view === 'day' ? (
        <Day {...props} />
      ) : (
        <Loading />
      )}
    </div>
  );
};
