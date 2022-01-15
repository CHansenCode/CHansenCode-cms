import React from 'react';

import { Presentation } from './Cards';

import css from './Presentations.module.scss';

export const Presentations = ({ data, ...props }) => {
  return (
    <div className={css.wrapper}>
      <>
        {data.map((d, i) => (
          <Presentation key={d._id} data={d} {...props} />
        ))}
      </>
    </div>
  );
};
