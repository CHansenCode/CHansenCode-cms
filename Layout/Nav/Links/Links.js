import React from 'react';

import css from './Links.module.scss';
import { NavLink } from 'components';

import { navConstructor } from 'config';

export const Links = () => {
  return (
    <ul className={css.links}>
      {navConstructor.map((cat, i) => (
        <div className={css.category} key={`navCat${i}`}>
          <h5 className="pc7">{cat.category} :</h5>

          {cat.pages.map((l, i) => (
            <NavLink key={l.title} href={l.href}>
              <li className={css.link} key={`navlink${i}`}>
                {l.title}
              </li>
            </NavLink>
          ))}
        </div>
      ))}
    </ul>
  );
};
