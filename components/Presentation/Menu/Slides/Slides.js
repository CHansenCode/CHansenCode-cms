import React, { useState } from 'react';

import { Button } from 'chansencode-lib';

import { ToggleCover, SlidePrev, SlideNext } from '../';
import { PageCounter } from './PageCounter';

import css from './Slides.module.scss';

export const Slides = ({ ...props }) => {
  //
  async function onClickSetTemplate(val) {
    let slides = [...props.formData.slides];
    let newSlide = {
      ...props.formData.slides[props.activeSlide - 1],
      template: val,
    };
    slides[props.activeSlide - 1] = newSlide;
    props.setFormData({ ...props.formData, slides: slides });
  }

  return (
    <header className={css.menu_slides}>
      <>
        <SlidePrev {...props} />
        <PageCounter {...props} />
        <SlideNext {...props} />
      </>

      <>
        <PickTemplate onClickSetTemplate={onClickSetTemplate} {...props} />
        <ToggleCover {...props} />
      </>
    </header>
  );
};

const PickTemplate = ({ formData, activeSlide, onClickSetTemplate }) => {
  const [open, setOpen] = useState(false);

  //is to come from db later
  const templates = [0, 1, 2, 3, 4, 5];

  async function toggleOpenAndSetTemplate(val) {
    onClickSetTemplate(val);
    setOpen(false);
  }

  return (
    <div className={css.slide_template_picker}>
      <Button className={`pc3b`} onClick={() => setOpen(!open)}>
        Template : {formData && formData.slides[activeSlide - 1].template}
        <span className="sc">{`<`}</span>
      </Button>

      {open && (
        <ul onMouseLeave={() => setOpen(false)}>
          {templates.map((temp, i) => (
            <li
              key={`temp${temp}${i}`}
              className="pc3b bg"
              onClick={() => toggleOpenAndSetTemplate(temp)}
            >
              {temp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
