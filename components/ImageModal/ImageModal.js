import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Image } from 'components';

import { CLEAR_IMAGE_MODAL, SET_IMAGE_MODAL } from 'actions';

import css from './ImageModal.module.scss';

export const ImageModal = () => {
  //
  const dispatch = useDispatch();

  const [fade, setFade] = useState(false);
  const [data, setData] = useState({});

  async function clearImageModal() {
    //prefade the div to avoid flickering when changing data.src
    setFade(true);
    setTimeout(() => {
      dispatch({ type: CLEAR_IMAGE_MODAL });
      setFade(false);
    }, 320);
  }

  const activeImage = useSelector(state => state.imageModal);

  useEffect(() => {
    setData({ ...activeImage });
  }, [activeImage]);

  const propStyle = {
    opacity: data.src ? (fade ? '0' : '1') : '0',
    pointerEvents: data.src ? 'all' : 'none',
  };

  return (
    <div
      style={propStyle}
      className={`bg ${css.fixed}`}
      onClick={clearImageModal}
    >
      <div className={css.inner}>
        <div className={css.image_wrapper}>
          <Image contain data={data} />
        </div>

        <footer>
          <h3>{data.title}</h3>

          <p>{data.subtitle}</p>
        </footer>

        <h4 className={`pc5 ${css.info}`}>CLICK ANYWHERE TO CLOSE</h4>
      </div>
    </div>
  );
};
