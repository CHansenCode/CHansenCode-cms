import React from 'react';

import css from './Info.module.scss';

export const Info = ({ size, info }) => {
  //
  const propStyle = {
    height: size ? size : '1rem',
    width: size ? size : '1rem',
  };

  return (
    <div style={propStyle} className={css.wrapper}>
      <h5 style={propStyle} className="pc5b">
        i
      </h5>

      <div className={`bg pc5b ${css.hover}`}>
        <h5>{info}</h5>
      </div>
    </div>
  );
};
