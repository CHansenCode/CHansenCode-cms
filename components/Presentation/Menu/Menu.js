import { useState } from 'react';

import { SlideMenu, PresentationMenu, Settings } from 'components';
import { Button, Input } from 'chansencode-lib';

import { AiOutlineRollback, AiOutlineSetting } from 'react-icons/ai';

import css from './Menu.module.scss';

export const Menu = ({
  activeId,
  setActiveId,
  activeSlide,
  setActiveSlide,
  controller,
  setController,
  formData,
  setFormData,
  onUpdate,
  onDelete,
}) => {
  async function onClickGoBack() {
    activeSlide ? setActiveSlide(null) : setActiveId(null);
  }
  return (
    <div className={`bg pc3b ${css.topBar}`}>
      <>
        <h4 className="sc">PRESENTATIONS</h4>

        {activeId ? (
          //go back from 'slide' or 'presentation'
          <Button onClick={onClickGoBack}>
            <AiOutlineRollback size="1rem" />
          </Button>
        ) : (
          <div className="grid-filler"></div>
        )}
      </>

      <>
        {/* SLIDE OR PRESENTATION MENU */}
        {activeId && activeSlide ? (
          <>
            {formData && (
              <SlideMenu
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </>
        ) : (
          <>
            {formData && (
              <PresentationMenu formData={formData} setFormData={setFormData} />
            )}
          </>
        )}
      </>

      <>
        {/* SETTINGS BUTTONS */}
        <Settings
          controller={controller}
          activeId={activeId}
          setController={setController}
          onUpdate={onUpdate}
        />
      </>
    </div>
  );
};
