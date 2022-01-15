import React from 'react';

import { List } from './List';
import { Thumbnail } from './Thumbnail';

export const Item = ({ data, ...props }) => {
  return props.controller.view === 'list' ? (
    <List data={data} {...props} />
  ) : (
    <Thumbnail data={data} {...props} />
  );
};
