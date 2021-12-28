import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Picker.module.scss';

export const Picker = ({ username, data, activeId, setActiveId }) => {
  const persons = data.individualsChats;
  const groups = data.organizationChats;

  return (
    <div className={`pc1b ${css.picker}`}>
      <div>
        <h4 className="pc3b">Chats :</h4>
        <div
          className={css.toggle_individual_group}
          style={{ display: 'flex' }}
        >
          <Button>Users</Button>
          <Button>Group</Button>
        </div>
      </div>

      <div>
        <h5>people:</h5>
        {persons &&
          persons.map((chat, i) => (
            <Button
              className="pc5b"
              key={`chat_key${chat._id}`}
              onClick={() =>
                activeId === chat._id ? setActiveId() : setActiveId(chat._id)
              }
            >
              {chat.users.map(
                (user, i) => user.username !== username && user.username,
              )}
            </Button>
          ))}
      </div>
    </div>
  );
};
