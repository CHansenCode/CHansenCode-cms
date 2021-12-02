import { useState } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavLink from './NavLink/NavLink';

import css from './Nav.module.scss';

import { navConstructor } from 'config';

const Nav = ({ id, colors, setColors, showNav, setShowNav }) => {
  return (
    <aside id="nav" className={`bg ${css.aside}`}>
      <nav className={`pc5b ${css.nav}`}>
        <Header colors={colors} className={css.header} />

        <ul className={css.links}>
          {navConstructor.map((cat, i) => (
            <div key={`navCategory${i}`}>
              <h5 className="pc7">{cat.category} :</h5>

              {cat.pages.map((link, i) => (
                <NavLink key={link.title} href={link.href}>
                  <li key={`navlink${i}`}>{link.title}</li>
                </NavLink>
              ))}
            </div>
          ))}
        </ul>

        <Footer
          colors={colors}
          setColors={setColors}
          showNav={showNav}
          setShowNav={setShowNav}
          className={css.footer}
        />
      </nav>
    </aside>
  );
};

export default Nav;
