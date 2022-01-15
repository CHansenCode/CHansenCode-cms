import React from 'react';

import css from './Title.module.scss';

export const Title = ({ title, subtitle }) => {
  return title ? (
    <div className={css.wrapper}>
      <h3 className="sc">
        {title}
        {subtitle && ':'}
      </h3>
      <h3>{subtitle}</h3>
    </div>
  ) : (
    <div className={css.wrapper} />
  );
};
