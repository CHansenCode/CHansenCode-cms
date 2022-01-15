import React from 'react';

import css from './List.module.scss';

export const Item = ({ data, onClick, ...props }) => {
  let isActive = props.activeId === data._id;

  return (
    <li className={`${css.listItem} ${isActive ? 'sc' : ''}`} onClick={onClick}>
      <>
        <div className={css.img_wrapper}>
          <img src={data.url} alt={data.alt} />
        </div>

        <Cell data={data.title} />
        <Cell data={data.category} />
        <Cell data={data.project} />
        <Cell data={data.drawingType} />
        <Cell data={data.createdBy} />
        <Cell data={data.createdAt.substring(0, 10)} />
      </>
    </li>
  );
};

const Cell = ({ data, ...props }) => {
  return <h6>{data ? data : '-'}</h6>;
};
