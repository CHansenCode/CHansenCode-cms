import Link from 'next/link';

import { Logo } from 'chansencode-lib';

import css from './Header.module.scss';

export const Header = ({ colors }) => {
  return (
    <header>
      <div className={css.logo}>
        <Link href="/">
          <a>
            <Logo pc={colors.pc} sc={colors.sc} />
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
    </header>
  );
};
