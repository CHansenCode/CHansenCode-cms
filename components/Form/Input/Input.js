import React, { useState } from 'react';

import css from './Input.module.scss';

export const Input = ({
  label,
  style,
  placeholder,
  valid,
  required,
  infoOnHover,
  id,
  type,
  className,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  function onFocus() {
    setIsFocused(true);
  }
  function onBlur() {
    setIsFocused(false);
  }
  return (
    <div className={`${css.div} ${className}`}>
      <header className={css.header}>
        {label && <h5 className={`${css.label}`}>{label} :</h5>}
        {required && <h6 className={`${css.required} secondary`}>* req.</h6>}
        {infoOnHover && (
          <IconOnHoverInfo text={infoOnHover} forceHover={isFocused} />
        )}
      </header>

      <div className={`${css.inputWrapper} ${valid && css.valid}`}>
        <input
          style={style}
          id={id}
          placeholder={placeholder}
          type={type}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          value={value}
          onChange={onChange}
        />
        {valid && <div className={css.checkmark}>✓</div>}
      </div>
    </div>
  );
};

const IconOnHoverInfo = ({ text, forceHover }) => {
  const [hover, setHover] = useState(false);

  function onMouseEnter() {
    setHover(true);
  }
  function onMouseLeave() {
    setHover(false);
  }

  const style = {
    wrapper: {
      position: 'relative',
      height: '1rem',
      width: '1rem',

      textAlign: 'right',

      display: 'flex',
      justifyContent: 'flex-end',

      pointer: 'help',
    },

    icon: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: 'thin solid currentColor',
      cursor: 'help',
    },

    onHover: {
      position: 'absolute',
      top: 0,
      right: '1rem',
      marginRight: '1rem',
      background: 'inherit',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div
      style={style.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={style.icon}>
        <h6>i</h6>
      </div>

      {(forceHover || hover) && <h5 style={style.onHover}>{text}</h5>}
    </div>
  );
};
