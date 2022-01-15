import React from 'react';

import { Item, ListHeader } from './Item';

import css from './List.module.scss';

export const List = ({ ...props }) => {
  //
  async function onClickSetId(id) {
    props.activeId === id ? props.setActiveId('') : props.setActiveId(id);
  }

  return (
    <div className={css.list}>
      <ListHeader {...props} />

      {props.mediaData.map((p, i) => (
        <Item
          key={p._id}
          data={p}
          onClick={() => onClickSetId(p._id)}
          {...props}
        />
      ))}
    </div>
  );
};
