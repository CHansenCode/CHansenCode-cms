import React from 'react';

import { Button } from 'chansencode-lib';

export const Delete = ({ controller, setController, ...props }) => {
  //
  async function onToggleDelete() {
    setController({
      ...controller,
      isDeleting: !controller.isDeleting,
    });
  }

  return (
    <Button
      className={controller.isDeleting ? 'sc' : ''}
      onClick={onToggleDelete}
    >
      DEL
    </Button>
  );
};
