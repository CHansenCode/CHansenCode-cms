import React from 'react';

import { Input } from 'chansencode-lib';

import css from './Presentation.module.scss';

export const Presentation = ({ formData, setFormData }) => {
  //
  async function onChange(e) {
    setFormData({ ...formData, title: e.target.value });
  }

  return (
    <div className={css.title_input}>
      <div>
        <h6>title:</h6>
        <Input
          className={`sc`}
          value={formData.title}
          onChange={e => onChange(e)}
        />
      </div>
    </div>
  );
};
