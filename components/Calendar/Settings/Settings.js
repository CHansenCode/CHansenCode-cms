import React, { useState } from 'react';

import { Button, Input } from 'chansencode-lib';
import { IoSettingsOutline } from 'react-icons/io5';

import css from './Settings.module.scss';

export const Settings = ({ settings, setSettings, ...props }) => {
  const [open, setOpen] = useState(false);

  async function onClickOpen() {
    setOpen(!open);
  }
  async function onMouseLeaveClose() {
    setOpen(false);
  }

  return (
    <div className={css.wrapper}>
      <Button onClick={onClickOpen}>
        <IoSettingsOutline size="1.5rem" />
      </Button>

      <div
        className={`${css.menu} ${open ? css.menu_open : ''}`}
        onMouseLeave={onMouseLeaveClose}
      >
        <div className={`bg pc3b ${css.inner}`}>
          <Input label="lunch start" value={settings.lunchStart} />
          <Input label="lunch duration" value={settings.lunchDuration} />
          <Input label="lunch inclusive ?" value={settings.lunchInclusive} />
          <Input label="work start" value={settings.workStart} />
          <Input label="work duration" value={settings.workDuration} />
        </div>
      </div>
    </div>
  );
};

// lunchDuration: '30',
// lunchInclusive: false,
// workStart: '07-00',
// workDuration: '8',
