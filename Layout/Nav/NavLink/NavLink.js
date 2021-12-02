import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './NavLink.module.scss';

const NavLink = ({ title, href, activeColor, hover, children }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <li
        style={{ color: router.pathname === href && activeColor }}
        className={`${css.li} ${router.pathname === href && css.active}`}
      >
        <a>
          {hover ? <h5>{hover}</h5> : null}
          {title} {children}
        </a>
      </li>
    </Link>
  );
};

export default NavLink;
