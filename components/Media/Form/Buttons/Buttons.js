import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Buttons.module.scss';

export const Buttons = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <>
        <ButtonClose {...props} />
        <Submit {...props} />
        <Clear {...props} />
      </>
    </div>
  );
};

const Submit = ({ ...props }) => {
  //
  async function onClickHandleSubmit() {
    props.activeId ? alert('save change') : alert('create new');
  }

  return (
    <Button onClick={onClickHandleSubmit}>
      {props.activeId ? 'Save changes' : 'Create new'}
    </Button>
  );
};

const Clear = ({ setActiveId, setFormData, ...props }) => {
  //
  async function onClickClearData() {
    props.clear();
  }

  return (
    <Button onClick={onClickClearData}>
      <p>Clear</p>
    </Button>
  );
};

const ButtonClose = ({ setActiveId, controller, ...props }) => {
  async function onClickClose() {
    setActiveId('');
    props.setController({ ...controller, isCreating: false });
  }

  return <Button onClick={() => onClickClose()}>X</Button>;
};
