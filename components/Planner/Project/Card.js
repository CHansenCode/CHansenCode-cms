import { DeleteProject, ControllerMenu, Input, Textarea, Select } from '../';

import css from './Card.module.scss';

export const Card = ({ ...props }) => {
  async function handleProjectChange(e, objKey) {
    props.setFormData({ ...props.formData, [objKey]: e.target.value });
  }

  return (
    <div className={css.card}>
      <header>
        <Input
          className="sc"
          ternary={props.controller.isEditing}
          value={props.formData.title}
          onChange={e => handleProjectChange(e, 'title')}
        />
      </header>

      <div className={css.inputs}>
        <div>
          <Input
            label="category"
            ternary={props.controller.isEditing}
            value={props.formData.category}
            onChange={e => handleProjectChange(e, 'category')}
          />
          <Select
            label="owners"
            id={props.formData._id}
            value={props.formData.owners}
          />
          <Select
            label="users"
            id={props.formData._id}
            value={props.formData.users}
          />
        </div>
        <div className={css.poopie}>
          <Textarea
            label="description:"
            ternary={props.controller.isEditing}
            value={props.formData.body}
            onChange={e => handleProjectChange(e, 'body')}
          />
        </div>
      </div>

      <aside>
        <div>
          <h6>stage 1</h6>
          <br />
          <h5>cow is an happy animal</h5>
        </div>
        <div>
          <h6>stage 2</h6>
          <h5>cow is an happy animal</h5>
        </div>
        <div>
          <h6>stage 3</h6>
          <h5>cow is an happy animal</h5>
        </div>
        <div>
          <h6>stage 4</h6>
          <h5>cow is an happy animal</h5>
        </div>
      </aside>

      <footer className={css.footer}>
        <ControllerMenu {...props} />
      </footer>

      {props.controller.isDeleting && <DeleteProject {...props} />}
    </div>
  );
};
