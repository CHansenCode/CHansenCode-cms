import { useState, useEffect } from 'react';

import { Button } from 'chansencode-lib';
import { AiOutlineSetting } from 'react-icons/ai';

import css from './Settings.module.scss';

export const Settings = ({
  activeId,
  controller,
  setController,
  //
  onUpdate,
}) => {
  const [open, setOpen] = useState(false);

  let isEditing = controller.isEditing;
  let isDeleting = controller.isDeleting;

  async function onToggleEdit() {
    setController({ ...controller, isEditing: !controller.isEditing });
  }
  async function onToggleDelete() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }

  return (
    <div className={css.menu_settings}>
      <div className={`${css.del_edit} ${!open ? css.del_edit_hidden : ''}`}>
        {/* DELETE_BUTTON */}
        {isEditing && (
          <Button className={isDeleting ? 'sc' : ''} onClick={onToggleDelete}>
            ALLOW DELETING
          </Button>
        )}

        {activeId && <Button onClick={() => onUpdate()}>save</Button>}
        <Button className={isEditing ? 'sc' : ''} onClick={onToggleEdit}>
          EDIT
        </Button>
      </div>

      <Button onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(open)}>
        <AiOutlineSetting size="1.25rem" />
      </Button>
    </div>
  );
};
