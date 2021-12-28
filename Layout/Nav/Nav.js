import Footer from './Footer';
import Header from './Header';
import Links from './Links';

import css from './Nav.module.scss';

const Nav = ({ colors, setColors, showNav, setShowNav }) => {
  return (
    <aside id="nav" className={`bg ${css.aside}`}>
      <nav className={`pc5b ${css.nav}`}>
        <Header colors={colors} id={css.header} />

        <Links />

        <Footer
          colors={colors}
          setColors={setColors}
          showNav={showNav}
          setShowNav={setShowNav}
          id={css.footer}
        />
      </nav>
    </aside>
  );
};

export default Nav;
