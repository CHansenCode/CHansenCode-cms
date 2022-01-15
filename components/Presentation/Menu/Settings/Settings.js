import { useState } from 'react';

import { BtnSettings, Delete, Edit } from '../Buttons';
import { Button } from 'chansencode-lib';

import css from './Settings.module.scss';

export const Settings = ({ onUpdate, ...props }) => {
  const [open, setOpen] = useState(false);

  async function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={css.menu_settings}>
      {props.controller.isEditing && <Delete {...props} />}
      {open && <Edit {...props} />}

      <BtnSettings onClick={toggleOpen} />
    </div>
  );
};
