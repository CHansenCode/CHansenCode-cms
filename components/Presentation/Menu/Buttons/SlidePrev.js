import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Buttons.module.scss';

export const SlidePrev = ({ ...props }) => {
  //
  async function prevSlide() {
    props.setActiveSlide(props.activeSlide - 1);
  }

  let disabled = props.activeSlide < 2;

  return (
    <Button className={disabled ? css.disabled : ''} onClick={prevSlide}>
      <h3>{`<`}</h3>
    </Button>
  );
};
