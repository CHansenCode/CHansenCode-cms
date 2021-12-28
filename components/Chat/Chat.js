import { useRef, useState, useEffect } from 'react';

import { Me, You, Textarea } from './';

import css from './Chat.module.scss';

export const Chat = ({ username, chat, onDeletePost, children }) => {
  const messageEl = useRef(null);

  useEffect(() => {
    messageEl &&
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight });
      });
  }, []);

  return (
    <div className={css.chat_window}>
      <div ref={messageEl} className={css.message_wrapper}>
        {chat &&
          chat.messages.map((post, i) =>
            post.username === username ? (
              <Me key={`${post}${i}`} data={post} onDeletePost={onDeletePost} />
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
