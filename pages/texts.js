import { useState, useEffect } from 'react';

import { Section } from 'components';
import { Menu } from 'components/Texts';
import { Textarea, Input, Loading, Button, Form } from 'chansencode-lib';

import { Paragraph, PageSelector, Page } from 'components/TextEditor';
import { useSelector, useDispatch } from 'react-redux';

import {
  getTexts,
  updateText,
  deleteText,
  newPage,
  newParagraph,
  deleteParagraph,
} from 'pages/api';

export default function Texts() {
  //
  const dispatch = useDispatch();

  const [controller, setController] = useState({
    isEditing: false,
    isDeleting: false,
    newPage: false,
    newParagraph: false,
  });
  const [activeId, setActiveId] = useState(null);
  const [titleData, setTitleData] = useState({
    page: '',
    paragraph: '',
  });
  const [formData, setFormData] = useState({
    _id: '',
    pageTitle: '',
    paragraphs: [],
  });

  useEffect(() => {
    dispatch(getTexts());
  }, [dispatch]);
  const textsData = useSelector(state => state.texts);

  const selectedPage = useSelector(
    state => activeId && state.texts.find(page => page._id === activeId),
  );
  useEffect(() => {
    selectedPage && setFormData(selectedPage);
  }, [selectedPage]);

  async function clear() {
    setFormData({
      _id: '',
      pageTitle: '',
      paragraphs: [],
    });
    setCopyFormData({
      _id: '',
      pageTitle: '',
      paragraphs: [],
    });
    setActiveId(null);
  }
  async function onPageClick(id) {
    activeId === id ? (setActiveId(null), clear()) : setActiveId(id);
    setController({ ...controller, newPage: false });
  }
  async function onSubmitNewParagraph(e) {
    e.preventDefault();
    dispatch(newParagraph(activeId, titleData.paragraph, user.token));

    setTitleData({ page: '', paragraph: '' });
    setController({ ...controller, newPage: false, newParagraph: false });
  }

  const props = {
    textsData,
    controller,
    setController,
    activeId,
    setActiveId,
    titleData,
    setTitleData,
    formData,
    setFormData,
  };

  return (
    <Section hasMenu title="Texts editor">
      <Menu {...props} />

      {/* {textsData ? (
        <PageSelector>
          {textsData.map((btn, i) => (
            <Button
              className={activeId === btn._id && 'sc'}
              key={btn._id}
              onClick={() =>
                activeId === btn._id ? setActiveId(null) : setActiveId(btn._id)
              }
            >
              {btn.pageTitle}
            </Button>
          ))}
        </PageSelector>
      ) : (
        <Loading />
      )} */}

      {/* {activeId && (
        <Page
          controller={controller}
          formData={formData}
          setFormData={setFormData}
        >
          {formData.paragraphs.length > 0 ? (
            formData.paragraphs.map((para, i) => (
              <Paragraph
                key={`para${para._id}`}
                i={i}
                data={para}
                formData={formData}
                setFormData={setFormData}
                onDeleteParagraph={() => onClickDeleteParagraph(para._id)}
              />
            ))
          ) : (
            <>No paragraphs found!</>
          )}

          <NewParagraph />
        </Page>
      )} */}
    </Section>
  );
}

const NewParagraph = ({
  text,
  toggle,
  onClick,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <div>
      {toggle ? (
        <Form onSubmit={onSubmit}>
          <Input onChange={onChange} />
          <Button onClick={onReset}>x</Button>
        </Form>
      ) : (
        <Button fontSize="1rem" onClick={onClick}>
          {text}
        </Button>
      )}
    </div>
  );
};
