import { useState } from 'react';

import Footer from './Footer/Footer';
import Lists from './Lists/Lists';
import Header from './Header/Header';

import css from './Nav.module.scss';

const Nav = ({ id, colors, setColors, showNav, setShowNav }) => {
  const propStyle = {
    aside: {
      color: colors.pc,
      background: colors.bg,
    },
  };
  return (
    <>
      <aside id="nav" style={propStyle.aside} className={css.aside}>
        <nav className={css.nav} style={propStyle.nav}>
          <Header colors={colors} className={css.header} />
          <Lists colors={colors} className={css.navLinks} />

          <Footer
            colors={colors}
            setColors={setColors}
            showNav={showNav}
            setShowNav={setShowNav}
            className={css.footer}
          />
        </nav>
      </aside>

      <style jsx>
        {`
          #nav {
          }
        `}
      </style>
    </>
  );
};

export default Nav;
