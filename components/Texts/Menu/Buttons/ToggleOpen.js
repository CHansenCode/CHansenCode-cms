import React from 'react';

import { Button } from 'chansencode-lib';
import { AiOutlineSetting } from 'react-icons/ai';

export const ToggleOpen = ({ ...props }) => {
  //
  async function foo() {
    console.log('bar');
  }

  return (
    <Button onClick={foo}>
      <AiOutlineSetting />
    </Button>
  );
};
