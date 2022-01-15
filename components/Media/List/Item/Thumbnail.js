import React from 'react';

import css from './Thumbnail.module.scss';

export const Thumbnail = ({ data, onClick, ...props }) => {
  return (
    <div className={css.thumbnail}>
      <h5>{data.title}</h5>
    </div>
  );
};
