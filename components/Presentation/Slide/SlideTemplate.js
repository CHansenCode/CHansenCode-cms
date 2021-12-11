import React from 'react';

import css from './SlideTemplate.module.scss';

export const SlideTemplate = ({ template, children, ...props }) => {
  switch (template) {
    case 0:
      return (
        <Content cName={`${css.zero} ${props.className}`} {...props}>
          {children}
        </Content>
      );
    case 1:
      return (
        <Content cName={`${css.one} ${props.className}`} {...props}>
          {children}
        </Content>
      );
    case 2:
      return (
        <Content cName={`${css.two} ${props.className}`} {...props}>
          {children}
        </Content>
      );
    case 3:
      return (
        <Content cName={`${css.three} ${props.className}`} {...props}>
          {children}
        </Content>
      );
    case 4:
      return (
        <Content cName={`${css.four} ${props.className}`} {...props}>
          {children}
        </Content>
      );
    case 5:
      return (
        <Content cName={`${css.five} ${props.className}`} {...props}>
          {children}
        </Content>
      );
    default:
      return (
        <Content cName={`${css.zero} ${props.className}`} {...props}>
          {children}
        </Content>
      );
  }
};

const Content = ({ cName, children, ...props }) => {
  return (
    <div className={`bg ${css.common} ${cName}`} {...props}>
      {children}
    </div>
  );
};
