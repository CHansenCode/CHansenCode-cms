import React from 'react';

import { Info } from 'components';

import css from './Wrapper.module.scss';

export const Wrapper = ({ children, ...props }) => {
  return (
    <div className={`${css.wrapper} ${props.focus ? 'sc' : ''}`}>
      <header>
        <Label label={props.label} />
        <Required />
        <Info size={'0.85rem'} />
      </header>

      {children}
    </div>
  );
};

const Label = ({ label }) => {
  return label ? <h6>{label} :</h6> : <h6 />;
};

const Required = ({ ...props }) => {
  return props.required ? <h6 className="sc">req. *</h6> : <h6 />;
};
