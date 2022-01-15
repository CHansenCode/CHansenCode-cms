import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Buttons.module.scss';

export const TogglePublished = ({ published, ...props }) => {
  //
  async function onClickTogglePublished() {
    props.setFormData({ ...props.formData, published: !published });
  }

  return (
    <Button onClick={onClickTogglePublished}>
      <p>{published ? 'published' : 'unpublished'}</p>
    </Button>
  );
};
