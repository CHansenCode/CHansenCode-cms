import { useState } from 'react';

import { Card } from './';
import { Subtasks } from '../Subtask/';

import css from './Task.module.scss';

export const Task = ({ ...props }) => {
  return (
    <div className={`${css.task}`}>
      <Card {...props} />
    </div>
  );
};
