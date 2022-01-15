import React from 'react';

import { Button } from 'chansencode-lib';

import { AiOutlineSetting } from 'react-icons/ai';

export const BtnSettings = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <AiOutlineSetting />
    </Button>
  );
};
