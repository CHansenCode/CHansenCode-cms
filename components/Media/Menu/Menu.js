import React from 'react';

import { AiOutlineUnorderedList, AiOutlinePicture } from 'react-icons/ai';

import { Button } from 'chansencode-lib';

export const Menu = ({ ...props }) => {
  return (
    <>
      <ToggleView {...props} />
      <CreateNew {...props} />
    </>
  );
};

const ToggleView = ({ controller, setController, ...props }) => {
  async function toggleView() {
    controller.view === 'list'
      ? setController({ ...controller, view: 'thumbnail' })
      : setController({ ...controller, view: 'list' });
  }

  return (
    <Button className="pc3b" onClick={toggleView}>
      {controller.view === 'list' ? (
        <AiOutlineUnorderedList title="list view" size="1.25rem" />
      ) : (
        <AiOutlinePicture title="thumbnail view" size="1.25rem" />
      )}
    </Button>
  );
};

const CreateNew = ({ controller, setController, ...props }) => {
  //
  async function onClickToggleCreateNew() {
    if (props.activeId) {
      props.setActiveId('');
      props.setFormData({ ...props.mediaModel });
      setController({ ...controller, isCreating: true });
    } else {
      setController({ ...controller, isCreating: true });
    }
  }

  return (
    <Button onClick={onClickToggleCreateNew}>
      <h4>+ </h4>
      <p> NEW</p>
    </Button>
  );
};
