import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Composition, Chat, Picker, Textarea } from 'components/Chat';
import { Section } from 'components';

import { getMyChats, postToChat, getUsers, deletePost } from 'pages/api';

export default function Intercom() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: 'cadmin',
    message: '',
  });
  const [activeId, setActiveId] = useState('');

  const username = 'cadmin';
  const organization = 'chansencode';

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMyChats(username, organization));
  }, [dispatch]);

  const chatData = useSelector(state => state.intercom);

  const activeChat = useSelector(
    state =>
      activeId &&
      state &&
      state.intercom.individualsChats.find(post => post._id === activeId),
  );

  async function clear() {
    setActiveId('');
    setFormData({
      username: 'cadmin',
      message: '',
    });
  }

  async function postMessage(e, id, formData) {
    e.preventDefault();

    try {
      dispatch(postToChat(formData, id));
    } catch (error) {
      console.log(error);
    }
    setFormData({ ...formData, message: '' });
  }

  async function onDeletePost(postId) {
    try {
      dispatch(deletePost(postId, activeId));
    } catch (error) {
      console.log(error);
    }
    clear();
  }

  return (
    <>
      <Section>
        <Composition>
          <Picker
            username={username}
            data={chatData && chatData}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <Chat
            username={username}
            chat={activeChat}
            onDeletePost={onDeletePost}
          />
          <Textarea
            activeId={activeId}
            message={formData.message}
            onSubmit={e => postMessage(e, activeId, formData)}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </Composition>
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
