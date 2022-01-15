import React from 'react';

import { List, Form } from './';

import css from './Media.module.scss';

export const Media = ({ ...props }) => {
  return (
    <div className={css.main}>
      <List {...props} />
      <Form {...props} />
    </div>
  );
};
