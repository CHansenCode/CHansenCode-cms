import { useState } from 'react';

import { NewStage } from '../New';

import css from './Stage.module.scss';

export const Stages = ({ ...props }) => {
  const slideDown = props.controller.isOpen;

  return props.children
    ? props.children.length > 0 && (
        <div className={`${css.stages} ${slideDown ? css.open : ''}`}>
          {props.children}

          {props.children.length < 4 && <NewStage {...props} />}
        </div>
      )
    : 'no stages found';
};
