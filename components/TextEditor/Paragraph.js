import { Button, InputField, Textarea } from 'chansencode-lib';

import css from './style.module.scss';

export const Paragraph = ({
  i,
  data,
  formData,
  setFormData,
  onDeleteParagraph,
}) => {
  async function onChange(e, key) {
    let newObject = { ...data, [key]: e.target.value };

    const filtered = formData.paragraphs.filter(p => p._id !== data._id);
    filtered.splice(i, 0, newObject);

    setFormData({ ...formData, paragraphs: filtered });
  }
  return (
    <>
      <div className={`pc3b ${css.paragraph}`}>
        <header>
          <InputField
            type="input"
            className="sc sc1bg"
            label="title"
            placeholder="..."
            value={data.title}
            onChange={e => onChange(e, 'title')}
          />
          <Button onClick={onDeleteParagraph}>x</Button>
        </header>

        <InputField
          label="body"
          type="textarea"
          value={data.body}
          onChange={e => onChange(e, 'body')}
        />
      </div>
    </>
  );
};
