import { useState } from 'react';

import { Button } from 'chansencode-lib';

import css from './ControllerMenu.module.scss';

export const ControllerMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${css.menu} ${open && css.open}`}
      // onMouseLeave={() => setOpen(false)}
    >
      <Button
        className="pc3b"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
      >
        ⚙
      </Button>
      <div>{children}</div>
    </div>
  );
};
