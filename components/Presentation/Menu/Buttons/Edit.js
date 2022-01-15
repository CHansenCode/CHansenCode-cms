import React from 'react';

import { Button } from 'chansencode-lib';

export const Edit = ({ controller, setController, ...props }) => {
  //
  async function onToggleEdit() {
    setController({
      ...controller,
      isEditing: !controller.isEditing,
    });
  }

  return (
    <Button className={controller.isEditing ? 'sc' : ''} onClick={onToggleEdit}>
      EDIT
    </Button>
  );
};
