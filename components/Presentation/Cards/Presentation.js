import React from 'react';

import { Label } from 'components';
import { TogglePublished } from '../Buttons';

import css from './Presentation.module.scss';

export const Presentation = ({ data, ...props }) => {
  //
  async function setId() {
    props.setActiveId(data._id);
  }

  return (
    <div className={`bg pc5b ${css.wrapper}`} onClick={setId}>
      <header>
        <Label label="title">
          <p>{data.title}</p>
        </Label>
      </header>

      <Published published={data.published} />
    </div>
  );
};

const Published = ({ published }) => {
  const propStyle = {
    color: published ? 'veridian' : 'darkorange',
  };
  return (
    <div style={{ width: '100%' }}>
      <h5 style={propStyle}>{published ? 'published' : 'unpublished'}</h5>
    </div>
  );
};
