import React from 'react';

import css from './Label.module.scss';

export const Label = ({ label, children }) => {
  return (
    <div className={css.wrapper}>
      <h6>{label} :</h6>

      <div>{children}</div>
    </div>
  );
};
