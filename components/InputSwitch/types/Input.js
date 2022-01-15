import React, { useState } from 'react';

import css from './Input.module.scss';

export const Input = ({ data, setData, objKey, ...props }) => {
  //
  async function onChange(e) {
    setData({ ...data, [objKey]: e.target.value });
  }
  async function setFocus() {
    props.setFocus(true);
  }
  async function clearFocus() {
    props.setFocus(false);
  }

  return (
    <input
      className={`${props.focus ? 'sc' : 'pc5b'} ${css.input}`}
      value={data[objKey]}
      onFocus={setFocus}
      onBlur={clearFocus}
      onChange={e => onChange(e)}
    />
  );
};
