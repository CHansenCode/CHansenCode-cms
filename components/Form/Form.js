import { Button } from 'chansencode-lib';
import { InputField } from './';
import { Foldable } from './Foldable';

import { formConstructor } from 'config';
import { mediaServer } from 'config';

import css from './Form.module.scss';

export const Form = ({
  formData,
  setFormData,
  activeId,
  showForm,
  onClose,
  onCreateNew,
  handleSubmit,
  onClear,
}) => {
  const propStyle = {
    showCloseBtn_wrapper: {
      left: activeId || showForm ? '-1rem' : '-10rem',
    },
    showCloseBtn: {
      height: activeId || showForm ? '2rem' : '5rem',
      width: activeId || showForm ? '2rem' : '5rem',
      color: activeId || showForm ? 'red' : 'currentColor',
    },
  };
  return (
    <div className={css.wrapper}>
      <div style={propStyle.showCloseBtn_wrapper} className={css.showCloseBtn}>
        <Button
          className="bg"
          style={propStyle.showCloseBtn}
          onClick={activeId || showForm ? onClose : onCreateNew}
        >
          {activeId || showForm ? 'x' : '+ New Post'}
        </Button>
      </div>

      <div className={css.scrollable}>
        <form
          style={propStyle.form}
          className={`pcbg ${css.form}`}
          onSubmit={e => e.preventDefault()}
        >
          <header>
            <h4 className={`sc ${css.title}`}>{formConstructor.title}</h4>
            {formData.category && formData.project && formData.filename && (
              <img
                src={`${mediaServer}${formData.category}/${formData.project}/${formData.filename}`}
              />
            )}
          </header>

          <div className={css.basicInput}>
            {formConstructor.basic.map((constructor, i) => (
              <InputField
                key={`basic${constructor.key}${i}`}
                constructor={constructor}
                formData={formData}
                setFormData={setFormData}
              />
            ))}
          </div>

          <Foldable className={css.advanceInput}>
            {formConstructor.advanced.map((constructor, i) => (
              <InputField
                key={`advanced${constructor.key}${i}`}
                constructor={constructor}
                formData={formData}
                setFormData={setFormData}
              />
            ))}
          </Foldable>

          <footer className={css.saveButton}>
            <Button color="green" onClick={handleSubmit}>
              {activeId ? 'Save changes' : '+ Create new'}
            </Button>
            {!activeId && <Button onClick={onClear}>clear form</Button>}
          </footer>
        </form>
      </div>
    </div>
  );
};
