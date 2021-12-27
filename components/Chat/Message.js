import React from 'react';

import css from './Message.module.scss';

export const Me = ({ data }) => {
  return (
    <div className={`${css.bubble} ${css.me} sc sc5b`}>
      <h6>me :</h6>
      <p>{data.message}</p>
    </div>
  );
};

export const You = ({ data }) => {
  return (
    <div className={`${css.bubble} ${css.you} pc pc5b`}>
      <h6>{data.username} :</h6>
      <p>{data.message}</p>
    </div>
  );
};
