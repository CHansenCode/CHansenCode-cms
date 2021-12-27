import { useState } from 'react';

import { Button } from 'chansencode-lib';

import css from './Textarea.module.scss';

export const Textarea = ({ activeId, message, onChange, onSubmit }) => {
  const [focus, setFocus] = useState(false);

  return (
    <form className={`pc3b ${css.form}`} onSubmit={onSubmit}>
      {activeId ? (
        <textarea
          className={`pc3b ${focus ? css.focused : ''}`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={message}
          placeholder={focus ? '' : '...'}
          onChange={onChange}
        />
      ) : (
        <div className={`pc3b ${css.placeholder_div}`}>
          Click on a name in the menu to start chatting !
        </div>
      )}

      <Button className={`pc3b ${focus ? css.focused : ''}`}>Send</Button>
    </form>
  );
};
