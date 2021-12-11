import { useState } from 'react';

import { SlideTemplate, DBimgPicker } from 'components';

import css from './Slide.module.scss';

export const Slide = ({
  data,
  formData,
  setFormData,
  activeSlide,
  controller,
}) => {
  const [open, setOpen] = useState(false);
  const [imgData, setImgData] = useState({ url: '' });

  async function onSlideChange(e, objKey) {
    let slides = [...formData.slides];
    let newSlide = { ...data, [objKey]: e.target.value };
    slides[activeSlide - 1] = newSlide;
    setFormData({ ...formData, slides: slides });
  }
  async function onSlideImgClick(e) {
    let slides = [...formData.slides];
    let newSlide = { ...data, url: e.target.currentSrc };
    slides[activeSlide - 1] = newSlide;
    setFormData({ ...formData, slides: slides });
    setOpen(false);
  }

  const propStyle = {
    objectFit: data.objFit ? 'cover' : 'contain',
  };

  return (
    data && (
      <div className={`${css.slide_wrapper}`}>
        <SlideTemplate template={data.template}>
          <input
            className={`sc sc3b ${css.input} ${
              controller.isEditing ? css.input_isEditing : ''
            }`}
            value={data.title}
            onChange={e => onSlideChange(e, 'title')}
          />
          <textarea
            className={`${css.textarea} ${
              controller.isEditing ? css.textarea_isEditing : ''
            }`}
            value={data.body}
            rows="4"
            onChange={e => onSlideChange(e, 'body')}
          ></textarea>

          <div className={css.img_wrapper} onClick={() => setOpen(!open)}>
            {data.url ? (
              <img
                height="100%"
                width="100%"
                style={propStyle}
                src={data.url}
                alt="presentation"
              />
            ) : (
              <div className={css.img_placeholder}>
                click here to choose an image
              </div>
            )}
          </div>
        </SlideTemplate>

        {open && (
          <DBimgPicker
            className={css.imgPicker}
            data={imgData}
            setData={setImgData}
            objKey="url"
            onClose={() => setOpen(false)}
            onClick={e => onSlideImgClick(e)}
          />
        )}
      </div>
    )
  );
};
