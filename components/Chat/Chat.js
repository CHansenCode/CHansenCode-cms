import { useRef } from 'react';

import { Me, You, Textarea } from './';

import css from './Chat.module.scss';

export const Chat = ({ username, chat, children }) => {
  const messageEl = useRef(null);

  return (
    <div className={css.chat_window}>
      <div ref={messageEl} className={css.message_wrapper}>
        {chat &&
          chat.posts.map((post, i) =>
            post.username === username ? (
              <Me key={`${post}${i}`} data={post} />
            ) : (
              <You key={`${post}${i}`} data={post} />
            ),
          )}
      </div>

      {/* TEXTAREA / CHATINPUT */}
      {children}
    </div>
  );
};
