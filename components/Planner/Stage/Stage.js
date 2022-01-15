import { useState } from 'react';
import { Card } from './';
import { Tasks, NewTask } from '../Task';

import css from './Stage.module.scss';

export const Stage = ({ ...props }) => {
  return (
    <div className={`${css.stage}`}>
      <Card {...props} />
    </div>
  );
};
