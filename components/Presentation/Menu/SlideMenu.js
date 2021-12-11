import { useState, useEffect } from 'react';

import { Button } from 'chansencode-lib';

import css from './SlideMenu.module.scss';

export const SlideMenu = ({
  activeSlide,
  setActiveSlide,
  formData,
  setFormData,
}) => {
  async function onClickSetTemplate(val) {
    let slides = [...formData.slides];
    let newSlide = { ...formData.slides[activeSlide - 1], template: val };
    slides[activeSlide - 1] = newSlide;
    setFormData({ ...formData, slides: slides });
  }
  async function setContainOrCover() {
    let slides = [...formData.slides];
    let newSlide = {
      ...formData.slides[activeSlide - 1],
      objFit: !formData.slides[activeSlide - 1].objFit,
    };
    slides[activeSlide - 1] = newSlide;
    setFormData({ ...formData, slides: slides });
  }

  return (
    <header className={css.menu_slides}>
      <Button
        className={activeSlide < 2 ? css.disabled : ''}
        onClick={() => setActiveSlide(activeSlide - 1)}
      >{`<`}</Button>

      <div className={css.slide_pageCount}>
        <h2 className="sc">{activeSlide}</h2>
        <span>/</span>
        <h3>{formData.slides.length}</h3>
      </div>

      <div
        className={activeSlide == formData.slides.length ? css.disabled : ''}
      >
        <Button onClick={() => setActiveSlide(activeSlide + 1)}>{`>`}</Button>
      </div>

      <PickTemplate
        formData={formData}
        activeSlide={activeSlide}
        onClickSetTemplate={onClickSetTemplate}
      />

      <Button
        className={`pc3b ${css.btn_toggle_imageFit}`}
        onClick={() => setContainOrCover()}
      >
        Image fit
      </Button>
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
