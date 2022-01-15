import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Buttons.module.scss';

export const SlideNext = ({ activeSlide, formData, ...props }) => {
  //
  async function nextSlide() {
    props.setActiveSlide(activeSlide + 1);
  }

  let disabled = props.activeSlide == formData.slides.length;

  return (
    <Button className={disabled ? css.disabled : ''} onClick={nextSlide}>
      <h3>{`>`}</h3>
    </Button>
  );
};
