import React from 'react';

import { Button } from 'chansencode-lib';

import css from './FixedWrapper.module.scss';

export const FixedWrapper = ({ ...props }) => {
  let toggleShow = props.activeId || props.controller.isCreating;

  const propStyle = {
    right: toggleShow ? '0' : '-10rem',
    opacity: toggleShow ? '1' : '0',
    pointerEvents: toggleShow ? 'all' : 'none',
  };

  return (
    <form
      style={propStyle}
      className={`bg pc5b ${css.fixed} ${toggleShow ? css.fixed_open : ''}`}
      onSubmit={e => e.preventDefault()}
    >
      {props.children}
    </form>
  );
};
