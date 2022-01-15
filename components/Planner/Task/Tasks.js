import { useState } from 'react';
import { Button } from 'chansencode-lib';
import { NewTask } from '../New';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import css from './Task.module.scss';

export const Tasks = ({ onClick, toggle, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  async function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${css.tasks}`}>
      <ToggleOpen onClick={toggleOpen} toggle={toggle} {...props} />

      {(isOpen || props.controller.showTasks) && children}

      {props.controller.isEditing && <NewTask />}
    </div>
  );
};

const ToggleOpen = ({ toggle, onClick, ...props }) => {
  return (
    <header className={css.toggleOpen} onClick={onClick}>
      <h6>Tasks:</h6>

      <Button padding="0" className="pc5b">
        {toggle | props.controller.showTasks ? (
          <AiOutlineEye />
        ) : (
          <AiOutlineEyeInvisible />
        )}
      </Button>
    </header>
  );
};
