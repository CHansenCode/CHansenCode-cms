import { Input } from 'chansencode-lib';

import css from './PresentationMenu.module.scss';

export const PresentationMenu = ({ formData, setFormData }) => {
  return (
    <div className={css.title_input}>
      <div>
        <h6>title:</h6>
        <Input
          className={`sc`}
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
    </div>
  );
};
