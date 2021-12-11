import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Loading, Button } from 'chansencode-lib';

import css from './DBimgPicker.module.scss';

export const DBimgPicker = ({
  id,
  className,
  size,
  factor,
  strokeWidth,
  value,
  objKey,
  setData,
  data,
  onClick,
  onClose,
  ...props
}) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function getMedia() {
      const { data } = await axios.get(
        'https://chansendesign.herokuapp.com/media',
      );

      setMedia(data);
    }
    getMedia();
  }, []);

  return (
    <div className={`bg ${css.wrapper} ${className}`}>
      <header>
        <h4 className="sc">Media Gallery</h4>
        <Button size="1.5rem" padding="0" onClick={onClose}>
          x
        </Button>
      </header>

      <div className={css.scrollWindow}>
        {media ? (
          media.map((img, i) => (
            <div key={img._id}>
              <img
                className={css.img}
                height="100px"
                width="100px"
                src={img.url}
                alt=""
                onClick={onClick}
              />
            </div>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};
