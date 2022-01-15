import { Footer, Header, Links } from './';

import css from './Nav.module.scss';

export const Nav = ({ ...props }) => {
  //
  const propStyle = {
    left: props.showNav ? '0' : '-14rem',
  };

  return (
    <aside style={propStyle} id="nav" className={`bg ${css.aside}`}>
      <nav className={`pc5b ${css.nav}`}>
        <>
          <Header {...props} />

          <Links {...props} />

          <Footer {...props} />
        </>
      </nav>
    </aside>
  );
};
