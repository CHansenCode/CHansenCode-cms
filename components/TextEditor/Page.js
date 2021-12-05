import { InputField, Button } from 'chansencode-lib';

import css from './style.module.scss';

export const Page = ({
  controller,
  formData,
  setFormData,
  children,
  onClickDelete,
}) => {
  return (
    <div className={css.page}>
      <header className={`pc3b ${css.pageCard}`}>
        <div>
          <InputField
            label="title"
            className="sc"
            type="input"
            value={formData.pageTitle}
            data={formData}
            setData={setFormData}
          />
          <Button>cow</Button>
        </div>
        <div>
          <InputField
            label="description"
            type="textarea"
            rows={3}
            value={formData.pageTitle}
            data={formData}
            setData={setFormData}
          />
        </div>
        <div>
          <Button onClick={onClickDelete}>Delete</Button>
        </div>
      </header>

      <div className={css.page_paragraphWrapper}>{children}</div>
    </div>
  );
};
