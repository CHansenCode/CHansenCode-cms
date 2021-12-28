import { useState } from 'react';

import { Button } from 'chansencode-lib';

import css from './Message.module.scss';

export const Me = ({ data, onDeletePost }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${css.bubble} ${css.me} sc sc5b`}
      onMouseEnter={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
    >
      <div>
        <h6>me :</h6>
        <p>{data.message}</p>
      </div>

      <aside>
        {hover && (
          <>
            <Button onHover="cow" onDeletePost={() => onDeletePost(data._id)}>
              X
            </Button>
          </>
        )}
      </aside>
    </div>
  );
};

export const You = ({ data }) => {
  return (
    <div className={`${css.bubble} ${css.you} pc pc5b`}>
      <div>
        <h6>me :</h6>
        <p>{data.message}</p>
      </div>
    </div>
  );
};
