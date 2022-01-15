import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './NavLink.module.scss';

export const NavLink = ({ href, children, exact }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={`${css.a} ${isActive ? css.isActive : ''} ${
          isActive ? 'sc' : ''
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
