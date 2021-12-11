import { useRouter } from 'next/router';

import { Settings } from './';

import css from './SideMenu.module.scss';

export const SideMenu = ({ id, data }) => {
  return (
    <aside id={id} className={css.sideMenu}>
      <div className={css.interaction}>
        <p>empty</p>
      </div>

      <Settings data={data} />
    </aside>
  );
};
