import React from 'react';

import css from './Links.module.scss';
import NavLink from './NavLink/NavLink';

import { navConstructor } from 'config';

const Links = () => {
  return (
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
  );
};

export default Links;
