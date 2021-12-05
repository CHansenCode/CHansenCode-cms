import { useState } from 'react';

import { AiOutlineExpandAlt } from 'react-icons/ai';
import { Button } from 'chansencode-lib';

import css from './Foldable.module.scss';

export const Foldable = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${css.foldable} ${show && css.foldable_open}`}>
      <Button onClick={() => setShow(!show)}>
        <h5>Additional options:</h5>
        <AiOutlineExpandAlt />
      </Button>
      {children}
    </div>
  );
};
