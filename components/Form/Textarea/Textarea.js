import React, { useState } from 'react';

import css from './Textarea.module.scss';

export const Textarea = ({
  label,
  placeholder,
  valid,
  required,
  infoOnHover,
  id,
  className,
  value,
  onChange,
  rows,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  function onFocus() {
    setIsFocused(true);
  }
  function onBlur() {
    setIsFocused(false);
  }
  return (
    <div className={`${css.div} ${className} ${valid && css.valid}`}>
      <header className={css.header}>
        {label && <h5 className={css.label}>{label} :</h5>}
        {required && <h6 className={`${css.required} secondary`}>* req.</h6>}
        {infoOnHover && (
          <InfoIcon size="1rem" text={infoOnHover} forceHover={isFocused} />
        )}
      </header>

      <div
        className={`${css.inputWrapper} ${valid && css.valid} ${
          valid && 'success-bg success'
        }`}
      >
        <textarea
          id={id}
          placeholder={placeholder}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          value={value}
          rows={rows}
          onChange={onChange}
        ></textarea>

        {valid && <div className={css.checkmark}>✓</div>}
      </div>
    </div>
  );
};

Textarea.defaultProps = {
  rows: 5,
};

const InfoIcon = () => {
  return <div>i</div>;
};
