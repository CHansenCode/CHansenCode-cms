import React from 'react';

import css from './List.module.scss';

export const ListHeader = () => {
  return (
    <div className={`sc ${css.listItem}`}>
      <div className={css.img_wrapper}></div>

      <h6>title:</h6>
      <h6>Category:</h6>
      <h6>Project: </h6>
      <h6>drawing type:</h6>
      <h6>created by:</h6>
      <h6>created at:</h6>
    </div>
  );
};
