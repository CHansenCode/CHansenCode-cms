import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section, Post, Form } from 'components';
import { Button, List } from 'chansencode-lib';

import { getMedia, createMedia, updateMedia, deleteMedia } from 'pages/api';

export default function Media() {
  const dispatch = useDispatch();

  //#region STATES
  const [activeId, setActiveId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    alt: '',
    description: '',

    category: '',
    project: '',

    drawingType: '',
    scale: 0,
    northRotation: 0,

    url: '',
    src: '',

    tags: [],
    programs: [],

    filename: '',
    createdBy: '',
  });
  //#endregion

  //#region INIT & LISTENERS
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
  //#endregion
  //#region interaction
  async function onClose() {
    setActiveId(null);
    setShowForm(false);
    clear();
  }
  async function clear() {
    setActiveId(null);
    setFormData({
      title: '',
      alt: '',
      description: '',

      url: '',
      src: '',

      category: '',
      project: '',

      drawingType: '',
      scale: 0,
      northRotation: 0,

      tags: [],
      programs: [],

      filename: '',
      createdBy: '',
    });
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
  //#endregion

  return (
    <>
      <Section title="MEDIA GALLERY">
        <Button onClick={() => setCanDelete(!canDelete)}>
          {canDelete ? 'stop deleting' : 'allow deleting'}
        </Button>
        <List>
          {mediaData &&
            mediaData.map((post, i) => (
              //
              <Post key={`mediaPost${post._id}`}>
                <img src={post.src ? post.src : post.url} alt="" />
                <div onClick={() => setActiveId(post._id)}>
                  <h5>{i}</h5>
                  <h5 className="sc">{post.title}</h5>
                  <h5>{post.alt}</h5>
                  <h5>{post.category}</h5>
                  <h5>{post.project}</h5>
                  <h5>{post.filename}</h5>
                </div>

                {canDelete && (
                  <Button className="bg" onClick={() => deletePost(post._id)}>
                    x
                  </Button>
                )}
              </Post>
            ))}

          <aside className={`chMedia_form bg`}>
            <Form
              formData={formData}
              setFormData={setFormData}
              activeId={activeId}
              showForm={showForm}
              onClose={() => onClose()}
              onClear={() => clear()}
              onCreateNew={() => setShowForm(true)}
              handleSubmit={handleSubmit}
            />
          </aside>
        </List>
      </Section>

      <style jsx>
        {`
          .chMedia_form {
            position: fixed;
            z-index: 100;
            min-height: 100vh;
            top: 0;
            right: ${showForm ? '0' : '-32rem'};

            width: 32rem;
          }
        `}
      </style>
    </>
  );
}
