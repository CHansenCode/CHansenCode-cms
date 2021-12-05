import React from 'react';

import css from './Post.module.scss';

import { Item } from 'chansencode-lib';

export const Post = ({ children }) => {
  return <Item className={`sc1bg ${css.item}`}>{children}</Item>;
};
