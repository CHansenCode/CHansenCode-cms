import { Input } from 'components/Planner';
import { DeleteStage } from '../Delete';
import { Tasks } from '../Task';

import css from './Card.module.scss';

export const Card = ({ ...props }) => {
  async function handleChange(e, key) {
    let newStages = [...props.formData.stages];
    let newStage = { ...props.data, [key]: e.target.value };

    newStages[props.index.stage] = newStage;

    props.setFormData({ ...props.formData, stages: newStages });
    props.setController({
      ...props.controller,
      triggerUpdateToDb: props.controller.triggerUpdateToDb + 1,
    });
  }

  return (
    <div className={`bg ${css.card}`}>
      <header>
        <h4>STAGE {props.index.stage + 1}</h4>
        <Input
          className="sc"
          value={props.data.title}
          ternary={props.controller.isEditing}
          onChange={e => handleChange(e, 'title')}
        />
      </header>

      <div className={css.inputs}>
        <Input
          label="body"
          value={props.data.body}
          ternary={props.controller.isEditing}
          onChange={e => handleChange(e, 'body')}
        />
        <Input
          label="version"
          value={props.data.v}
          ternary={props.controller.isEditing}
          onChange={e => handleChange(e, 'v')}
        />
        <Input
          label="deadline"
          value={props.data.deadline}
          ternary={props.controller.isEditing}
          onChange={e => handleChange(e, 'deadline')}
        />
      </div>

      <Tasks {...props}>{props.children}</Tasks>

      {props.controller.isDeleting && <DeleteStage {...props} />}
    </div>
  );
};
