import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'components';
import { Media, Menu, List } from 'components/Media';

import { getMedia, createMedia, updateMedia, deleteMedia } from 'pages/api';
import { mediaModel } from 'config/media';

export default function MediaDB() {
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState(null);
  const [formData, setFormData] = useState({ ...mediaModel });
  const [controller, setController] = useState({
    view: 'list',
    isCreating: false,
    isDeleting: false,
  });

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  const mediaData = useSelector(state => state.media);

  const selectedPost = useSelector(
    state =>
      activeId && state.media.find(mediaPost => mediaPost._id === activeId),
  );
  useEffect(() => {
    selectedPost && setFormData({ ...selectedPost });
  }, [selectedPost]);

  async function onClose() {
    setActiveId(null);
    setShowForm(false);
    clear();
  }
  async function clear() {
    if (activeId) {
      setActiveId(null);
      setController({ ...controller, isCreating: true });
    }
    setFormData({ ...mediaModel });
  }
  async function handleSubmit() {
    try {
      (await activeId)
        ? dispatch(updateMedia(formData, activeId))
        : dispatch(createMedia(formData));
      clear();
    } catch (error) {}
  }
  async function deletePost(id) {
    dispatch(deleteMedia(id));
  }

  const props = {
    mediaData,
    controller,
    setController,
    activeId,
    setActiveId,
    formData,
    setFormData,
    clear,
    mediaModel,
  };

  return (
    <>
      <Section hasMenu title="media database">
        <Menu {...props} />

        <Media {...props} />
      </Section>
    </>
  );
}
