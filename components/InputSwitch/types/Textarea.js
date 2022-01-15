import React from 'react';

import css from './Textarea.module.scss';

export const Textarea = ({ data, setData, objKey, ...props }) => {
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
    <textarea
      className={`${props.focus ? 'sc' : 'pc5b'} ${css.textarea}`}
      value={data[objKey]}
      onFocus={setFocus}
      onBlur={clearFocus}
      onChange={e => onChange(e)}
      rows={props.rows}
    ></textarea>
  );
};
