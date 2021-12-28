import React from 'react';

import css from './Composition.module.scss';

export const Composition = ({ children }) => {
  return <div className={css.composition}>{children}</div>;
};
