import { useState } from 'react';
import { Input } from '../Input';
import { Button } from 'chansencode-lib';

import {
  AiOutlineClockCircle,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from 'react-icons/ai';

import css from './Subtask.module.scss';

export const Subtasks = ({ ...props }) => {
  return (
    <div className={`${css.subtasks}`}>
      <ToggleOpen onClick={props.onClick} toggle={props.toggle} {...props} />
      {(props.toggle || props.controller.showSubtasks) && props.children}
      cow
    </div>
  );
};

const ToggleOpen = ({ ...props }) => {
  const toggleOpen = props.toggle || props.controller.showSubtasks;

  return (
    <header className={css.toggleOpen} onClick={props.onClick}>
      <h6>Subtasks:</h6>

      <Button padding="0" className="pc5b">
        {toggleOpen ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </Button>
    </header>
  );
};
