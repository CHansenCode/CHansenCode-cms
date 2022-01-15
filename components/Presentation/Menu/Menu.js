import { Presentation } from './Presentation';
import { Slides } from './Slides';
import { GoBack } from './Buttons';

import { Settings } from './Settings';

import css from './Menu.module.scss';

export const Menu = ({ ...props }) => {
  return (
    <div className={css.topBar}>
      <GoBack {...props} />

      {props.activeId && props.activeSlide
        ? props.formData && <Slides {...props} />
        : props.formData && <Presentation {...props} />}

      <Settings {...props} />
    </div>
  );
};
