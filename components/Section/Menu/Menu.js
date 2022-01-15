import React from 'react';

import css from './Menu.module.scss';

export const Menu = ({ hasMenu, children }) => {
  return hasMenu ? <div className={css.container}>{children}</div> : <div />;
};
