import React from 'react';

import css from './Main.module.scss';

export const Main = ({ children, showNav, colors, setColors }) => {
  return (
    <>
      <main id="main_view">
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            colors: colors,
            setColors: setColors,
          });
        })}
      </main>

      <style jsx>
        {`
          #main_view {
            color: ${colors ? colors.pc : ''};
            background: ${colors ? colors.bg : ''};
            margin-left: ${showNav ? '14rem' : '0'};
          }
        `}
      </style>
    </>
  );
};
