import Navlink from '../NavLink/NavLink';
import { List } from 'chansencode-lib';

import css from './Lists.module.scss';

import { navConstructor } from 'config';

const Lists = ({ colors }) => {
  return (
    <div className={css.wrapper}>
      {navConstructor.map(category => (
        <List className={css.ul} key={category.category}>
          <h4 className="sc">{category.category}</h4>

          {category.pages.map(page => (
            <Navlink
              key={page.title}
              title={page.title}
              href={page.pageRoute}
              urlBarName={page.urlBarName}
              activeColor={colors.sc}
            />
          ))}
        </List>
      ))}
    </div>
  );
};

export default Lists;
