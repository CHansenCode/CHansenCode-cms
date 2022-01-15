import React from 'react';

import css from './PageCounter.module.scss';

export const PageCounter = ({ ...props }) => {
  //

  return (
    <div className={css.wrapper}>
      <h2 className="sc">{props.activeSlide}</h2>
      <span>/</span>
      <h3>{props.formData.slides.length}</h3>
    </div>
  );
};
