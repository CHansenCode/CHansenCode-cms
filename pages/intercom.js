import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Chat, Picker, Textarea } from 'components/Chat';
import { Section } from 'components';

import { getMyChats, postToChat } from 'pages/api';

export default function Intercom() {
  const [formData, setFormData] = useState({
    username: 'cadmin',
    message: '',
  });
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState('');
  const [activeChat, setActiveChat] = useState();

  const username = 'cadmin';

  useEffect(() => {
    dispatch(getMyChats(username));
    console.log('dispatch getChats');
  }, [dispatch]);

  const chats = [
    {
      _id: 'cowsRus',
      users: [
        {
          username: 'cadmin',
          lastUpdated: '2021-12-27',
        },
        {
          username: 'sengberg',
          lastUpdated: '2021-12-27',
        },
      ],
      posts: [
        {
          username: 'cadmin',
          message: 'first message',
        },
        {
          username: 'sengberg',
          message: '2nd message',
        },
        {
          username: 'cadmin',
          message: '3rd message',
        },
        {
          username: 'cadmin',
          message: '4th message',
        },
        {
          username: 'sengberg',
          message: '5th message',
        },
        {
          username: 'cadmin',
          message: 'first message',
        },
        {
          username: 'sengberg',
          message: '2nd message',
        },
        {
          username: 'cadmin',
          message: '3rd message',
        },
        {
          username: 'cadmin',
          message: '4th message',
        },
        {
          username: 'sengberg',
          message: '5th message',
        },
        {
          username: 'cadmin',
          message: 'first message',
        },
        {
          username: 'sengberg',
          message: '2nd message',
        },
        {
          username: 'cadmin',
          message: '3rd message',
        },
        {
          username: 'cadmin',
          message: '4th message',
        },
        {
          username: 'sengberg',
          message: '5th message',
        },
      ],
    },
    {
      _id: 'foxsRus',
      users: [
        {
          username: 'cadmin',
          lastUpdated: '2021-12-27',
        },
        {
          username: 'tinaanikka',
          lastUpdated: '2021-12-27',
        },
      ],
      posts: [
        {
          username: 'tinaanikka',
          message: 'first message',
        },
        {
          username: 'cadmin',
          message: '2nd message',
        },
        {
          username: 'tinaanikka',
          message: '3rd message',
        },
        {
          username: 'tinaanikka',
          message: '4th message',
        },
        {
          username: 'cadmin',
          message: '5th message',
        },
      ],
    },
  ];

  useEffect(() => {
    activeId
      ? setActiveChat(chats.find((chat, i) => chat._id === activeId))
      : setActiveChat();
  }, [activeId]);

  async function postToChat(e, id, data) {
    e.preventDefault();
    dispatch(postToChat(id, data));
  }

  return (
    <>
      <Section>
        <div id="chat_wrapper">
          <Picker
            username={username}
            data={chats}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <Chat
            activeId={activeId}
            username={username}
            data={chats}
            chat={activeChat}
            onSubmit={e => postToChat(e, activeId, formData)}
          >
            <Textarea
              activeId={activeId}
              message={formData.message}
              onSubmit={e => postToChat(e, activeId, formData)}
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </Chat>
        </div>
      </Section>

      <style jsx>
        {`
          #chat_wrapper {
            position: relative;
            height: calc(100vh - 4rem);
            width: 100%;

            display: grid;
            grid-template: 'picker chat' 1fr / 10rem 1fr;
            gap: 1rem;
          }
        `}
      </style>
    </>
  );
}
