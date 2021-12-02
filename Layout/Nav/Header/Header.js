import Link from 'next/link';

import { Logo } from 'chansencode-lib';

import css from './Header.module.scss';

const Header = ({ colors, children }) => {
  return (
    <div>
      <div className={css.logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={css.cmsText}>
        <p className="sc">
          <span>C</span>ontent
          <span>M</span>anagement
          <span>S</span>ystem
        </p>
      </div>

      <div className={css.loggedInAs}>
        <h6>Logged in as:</h6>
      </div>
    </div>
  );
};

export default Header;
