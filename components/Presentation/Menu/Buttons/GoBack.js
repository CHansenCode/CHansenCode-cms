import React from 'react';

import { Button } from 'chansencode-lib';
import { AiOutlineRollback } from 'react-icons/ai';

export const GoBack = ({ ...props }) => {
  //
  async function onClickGoBack() {
    props.activeSlide ? props.setActiveSlide(null) : props.setActiveId(null);
  }

  return props.activeId ? (
    <Button onClick={onClickGoBack}>
      <AiOutlineRollback size="1rem" />
    </Button>
  ) : (
    <div />
  );
};
