import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'components';
import { Menu, Slide, SlideItem } from 'components';
import { Button } from 'chansencode-lib';

import css from './styles/presentation.module.scss';

import {
  getPresentations,
  createPresentation,
  updatePresentation,
  deletePresentation,
  createNewSlide,
} from 'pages/api';

export default function Presentations() {
  const dispatch = useDispatch();

  //#region states
  const [controller, setController] = useState({
    isEditing: false,
    isDeleting: false,
    autoSaveOnEdit: true,
    editInProcess: true,
  });
  const [activeId, setActiveId] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    descr: '',
    slides: [],
  });
  //#endregion

  //#region init & listeners
  useEffect(() => {
    dispatch(getPresentations());
  }, [dispatch]);
  const data = useSelector(state => state.presentation);
  const active = useSelector(
    state => activeId && state.presentation.find(p => p._id === activeId),
  );
  useEffect(() => {
    setFormData(active);
  }, [active]);

  useEffect(() => {
    //when formData is chagned, auto dispatch to db.
    async function saveAndSetTrigger() {
      setController({ ...controller, autoSaveOnEdit: false });
      activeId && dispatch(updatePresentation(formData, activeId));

      process.env.NODE_ENV !== 'production' && console.log('autosave');
    }
    controller.autoSaveOnEdit && saveAndSetTrigger();
  }, [formData]);
  useEffect(() => {
    !controller.autoSaveOnEdit &&
      setTimeout(() => {
        setController({ ...controller, autoSaveOnEdit: true });
      }, 10000);
  }, [controller.autoSaveOnEdit]);
  //#endregion

  //#region base funcs
  async function createPost() {
    dispatch(createPresentation());
  }
  async function updatePost() {
    process.env.NODE_ENV !== 'production' && console.log('update dispatched');
    dispatch(updatePresentation(formData, activeId));
  }
  async function deletePost(id) {
    dispatch(deletePresentation(id));
  }
  async function deleteSlide(slideIndex) {
    let slides = [...formData.slides.filter((slide, i) => !(i === slideIndex))];
    setFormData({ ...formData, slides: slides });
  }
  async function createSlide() {
    dispatch(createNewSlide(activeId));
  }
  async function onClickMoveSlideInArray(index) {
    let movingObject = formData.slides.find((slide, i) => i === index);
    let slides = [...formData.slides.filter((slide, i) => !(i === index))];
    slides.splice(index - 1, 0, movingObject);
    setFormData({ ...formData, slides: slides });
  }
  //#endregion

  return (
    <>
      <Section>
        <Menu
          activeId={activeId}
          setActiveId={setActiveId}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          formData={formData}
          setFormData={setFormData}
          controller={controller}
          setController={setController}
          onUpdate={updatePost}
        />

        <>
          {!activeId ? (
            //PRESENTATIONS LIST
            <>
              <ul className={css.presentations_list}>
                {data.map((p, i) => (
                  <PresentationItem
                    key={p._id}
                    data={p}
                    onDelete={() => deletePost(p._id)}
                    showDelete={controller.isDeleting}
                    onClick={() => setActiveId(p._id)}
                  />
                ))}
                <Button
                  margin="1rem 0 0 1rem"
                  border="thin dashed"
                  size="8rem"
                  className={css.presentaion_create_new}
                  onClick={() => createPost()}
                >
                  + new presentation
                </Button>
              </ul>
            </>
          ) : (
            <div>
              {!activeSlide ? (
                <ul className={css.slides_list}>
                  {formData &&
                    formData.slides.map((slide, i) => (
                      <>
                        {!(i === 0) && controller.isEditing && (
                          <Button
                            key={`slidebtn${slide._id}`}
                            className={`sc`}
                            fontSize="1.25rem"
                            size="2rem"
                            onClick={() => onClickMoveSlideInArray(i)}
                          >{`<`}</Button>
                        )}
                        <SlideItem
                          key={`slideIt${slide._id}`}
                          data={slide}
                          index={i}
                          setActiveSlide={setActiveSlide}
                          showDelete={controller.isDeleting}
                          onDelete={() => deleteSlide(i)}
                        />
                      </>
                    ))}
                  <Button
                    size="8rem"
                    margin="1rem 0 0 1rem"
                    border="thin dashed"
                    onClick={() => createSlide()}
                  >
                    + new slide
                  </Button>
                </ul>
              ) : (
                <Slide
                  data={formData.slides[activeSlide - 1]}
                  formData={formData}
                  setFormData={setFormData}
                  controller={controller}
                  activeSlide={activeSlide}
                />
              )}
            </div>
          )}
        </>
      </Section>
    </>
  );
}

const PresentationItem = ({ data, onClick, showDelete, onDelete }) => {
  return (
    data && (
      <li className={`${css.presentation_item}`}>
        <div onClick={onClick}>
          <div>
            <h6>title:</h6>
            <p className="sc">{data.title}</p>
          </div>
        </div>

        {showDelete && (
          <Button size="1.25rem" id={css.pres_del_btn} onClick={onDelete}>
            x
          </Button>
        )}
      </li>
    )
  );
};
