import React from 'react';

import css from './ChildWrapper.module.scss';

export const ChildWrapper = ({ fold, hasMenu, children }) => {
  const propStyle = {
    height: fold ? '1px' : 'min-content',
    overflow: fold ? 'hidden' : 'show',
    opacity: fold ? '0' : '1',
  };

  return (
    <div style={propStyle} className={css.wrapper}>
      {hasMenu
        ? React.Children.map(children, (child, i) =>
            i === 0 ? null : React.cloneElement(child),
          )
        : React.Children.map(children, (child, i) => React.cloneElement(child))}
    </div>
  );
};
