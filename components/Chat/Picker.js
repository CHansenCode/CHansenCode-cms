import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Picker.module.scss';

export const Picker = ({ username, data, activeId, setActiveId }) => {
  return (
    <div className={`pc1b ${css.picker}`}>
      <h4 className="pc3b">Chats :</h4>

      {data.map((chat, i) => (
        <Button
          key={`chat_key${chat._id}`}
          className={`pc3b ${activeId === chat._id ? 'sc' : ''}`}
          onClick={() =>
            activeId === chat._id ? setActiveId('') : setActiveId(chat._id)
          }
        >
          {chat.users.map((user, i) =>
            user.username !== username ? user.username : '',
          )}
        </Button>
      ))}
    </div>
  );
};
