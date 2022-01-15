import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Select.module.scss';

export const Select = ({ options, ...props }) => {
  return (
    <div className={css.select}>
      {options.map((o, i) => (
        <Option key={`${i}${o}`} value={o} {...props} />
      ))}
    </div>
  );
};

const Option = ({ data, setData, objKey, value }) => {
  //
  async function onClickSetData() {
    setData({ ...data, [objKey]: value });
  }

  const isActive = data[objKey] === value;

  return (
    <Button className={isActive ? 'sc' : ''} onClick={onClickSetData}>
      {value}
    </Button>
  );
};
