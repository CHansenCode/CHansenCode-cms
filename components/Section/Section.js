import React, { useState } from 'react';

import { Title } from './Title/Title';
import { Menu } from './Menu/Menu';
import { ButtonFold } from './ButtonFold/ButtonFold';
import { ChildWrapper } from './ChildWrapper/ChildWrapper';

import css from './Section.module.scss';

export const Section = ({ children, ...props }) => {
  const [fold, setFold] = useState(props.foldInit ? true : false);

  async function toggleFold() {
    props.foldable && setFold(!fold);
  }

  const foldStyle = {
    height: fold ? '5rem' : 'min-content',
    minHeight: props.full ? 'calc(100vh)' : '1px',
  };

  return (
    <section
      style={foldStyle}
      className={`pc05bg ${css.section} ${fold && css.section_closed}`}
    >
      <header className={css.header} onClick={toggleFold}>
        <Title title={props.title} subtitle={props.subtitle} />

        <Menu hasMenu={props.hasMenu}>{children && children[0]}</Menu>

        <ButtonFold
          foldable={props.foldable}
          fold={fold}
          onClick={toggleFold}
        />
      </header>

      <ChildWrapper fold={fold} hasMenu={props.hasMenu}>
        {children}
      </ChildWrapper>
    </section>
  );
};
