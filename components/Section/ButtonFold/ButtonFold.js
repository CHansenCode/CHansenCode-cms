import React from 'react';

import { Button } from 'chansencode-lib';

import css from './ButtonFold.module.scss';

export const ButtonFold = ({ foldable, fold, onClick }) => {
  const propStyle = {
    transform: fold ? 'rotate(90deg)' : 'rotate(270deg)',
  };

  return foldable ? (
    <div className={`bg ${css.wrapper}`}>
      <Button className="pc5b" padding="0" onClick={onClick}>
        <h4 style={propStyle}>{`>`}</h4>
      </Button>
    </div>
  ) : (
    //empty for grid-template
    <div />
  );
};
