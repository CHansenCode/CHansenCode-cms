import css from './Select.module.scss';

import { Button } from 'chansencode-lib';

export const Select = ({ constructor, formData, setFormData }) => {
  return (
    <div className={css.select}>
      {constructor.label && <h5>{constructor.label}:</h5>}
      <div className={css.options}>
        {constructor &&
          constructor.options.map((option, i) => (
            <Button
              key={`${option}${i}`}
              onClick={() =>
                formData[constructor.key] === option
                  ? setFormData({ ...formData, [constructor.key]: '' })
                  : setFormData({ ...formData, [constructor.key]: option })
              }
              className={option === formData[constructor.key] && css.selected}
            >
              {option}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Select;
