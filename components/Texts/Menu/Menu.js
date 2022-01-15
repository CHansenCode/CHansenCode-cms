import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Menu.module.scss';

export const Menu = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <Button>first button</Button>
      </div>

      <div>
        <Settings />
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <Button>delete</Button>
    </div>
  );
};
