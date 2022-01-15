import React from 'react';

import { Button } from 'chansencode-lib';

export const ToggleCover = ({ formData, setFormData, ...props }) => {
  //
  async function toggleCover() {
    let slides = [...formData.slides];
    let newSlide = {
      ...formData.slides[activeSlide - 1],
      objFit: !formData.slides[activeSlide - 1].objFit,
    };
    slides[activeSlide - 1] = newSlide;
    setFormData({ ...formData, slides: slides });
  }

  return <Button onClick={toggleCover}>Image fit</Button>;
};
