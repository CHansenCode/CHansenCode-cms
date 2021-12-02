import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './NavLink.module.scss';

const NavLink = ({ title, href, children, exact }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={`${css.a} ${isActive && css.isActive} ${isActive && 'sc'}`}>
        {title} {children}
      </a>
    </Link>
  );
};

export default NavLink;
