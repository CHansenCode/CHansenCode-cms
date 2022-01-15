import React, { useState } from 'react';

import { Button } from 'chansencode-lib';

import css from './Fold.module.scss';

export const Fold = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);

  async function toggleOpen() {
    setOpen(!open);
  }

  const propStyle = {
    height: open ? 'min-content' : '1.5rem',
    childWrapper: {
      pointerEvents: open ? 'all' : 'none',
    },
  };

  return (
    <div style={propStyle} className={css.wrapper}>
      <header className={css.header} onClick={toggleOpen}>
        <p>Advanced options</p>
      </header>

      <div style={propStyle.childWrapper} className={css.childWrapper}>
        {children}
      </div>
    </div>
  );
};
